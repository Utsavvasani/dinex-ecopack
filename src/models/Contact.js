import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            trim: true,
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
        },
        dialCode: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"],
            trim: true,
        },
        subject: {
            type: String,
            required: [true, "Subject is required"],
            enum: ["Product Inquiry", "Request a Quote", "Technical Support", "Other"],
        },
        message: {
            type: String,
            required: [true, "Message is required"],
            trim: true,
        },
        status: {
            type: String,
            enum: ["new", "read", "replied"],
            default: "new",
        },
    },
    {
        timestamps: true, // adds createdAt & updatedAt automatically
    }
);

// Prevent model re-compilation in Next.js hot reload
export default mongoose.models.Contact ||
    mongoose.model("Contact", ContactSchema);
