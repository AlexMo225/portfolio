import mongoose from "mongoose";

// Support pour différentes configurations d'environnement
let MONGODB_URI = process.env.MONGODB_URI;

// Si MONGODB_URI n'est pas défini, essayer de le construire à partir des variables Netlify
if (!MONGODB_URI && process.env.DB_CLUSTER && process.env.DB_PASSWORD) {
    // Construction de l'URI MongoDB pour Netlify
    const username = "alexmorelsahie"; // Remplacez par votre nom d'utilisateur MongoDB
    const password = process.env.DB_PASSWORD;
    const cluster = process.env.DB_CLUSTER;
    MONGODB_URI = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/portfolio?retryWrites=true&w=majority`;
}

if (!MONGODB_URI) {
    console.warn(
        "MongoDB URI not configured. Database features will be disabled."
    );
    // En mode production, on peut continuer sans MongoDB pour les pages statiques
    if (process.env.NODE_ENV === "production") {
        MONGODB_URI = null;
    } else {
        throw new Error(
            "Please define the MONGODB_URI environment variable inside .env.local or configure DB_CLUSTER and DB_PASSWORD"
        );
    }
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    // Si pas de MongoDB URI configuré, retourner null (mode sans base de données)
    if (!MONGODB_URI) {
        console.warn(
            "Database connection skipped - MongoDB URI not configured"
        );
        return null;
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose
            .connect(MONGODB_URI, opts)
            .then((mongoose) => {
                return mongoose;
            });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        console.error("Database connection error:", e);
        // En production, retourner null au lieu de crasher
        if (process.env.NODE_ENV === "production") {
            return null;
        }
        throw e;
    }

    return cached.conn;
}

export default dbConnect;
