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
            enum: [
                "Product Inquiry",
                "Request a Quote",
                "Technical Support",
                "Distributorship Inquiry",
                "Brand Labeling Inquiry",
                "Catalog Download",
                "Other"
            ],
        },
        message: {
            type: String,
            required: [true, "Message is required"],
            trim: true,
        },
        companyName: {
            type: String,
            trim: true,
        },
        industry: {
            type: String,
            trim: true,
        },
        region: {
            type: String,
            trim: true,
        },
        businessYear: {
            type: String,
            trim: true,
        },
        labelingType: {
            type: String,
            trim: true,
        },
        quantity: {
            type: String,
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

// Force model re-registration to ensure schema updates (like enums) are applied in development
if (mongoose.models.Contact) {
    delete mongoose.models.Contact;
}
export default mongoose.model("Contact", ContactSchema);
