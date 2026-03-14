import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request) {
    try {
        const body = await request.json();

        const { 
            firstName, 
            lastName, 
            email, 
            dialCode, 
            phone, 
            subject, 
            message,
            companyName,
            industry,
            region,
            businessYear,
            labelingType,
            quantity
        } = body;

        // Server-side validation
        const errors = {};
        if (!firstName?.trim()) errors.firstName = "First name is required.";
        if (!lastName?.trim()) errors.lastName = "Last name is required.";
        if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            errors.email = "A valid email address is required.";
        if (!phone?.trim() || !/^\d{7,15}$/.test(phone))
            errors.phone = "A valid phone number (7-15 digits) is required.";
        if (!subject) errors.subject = "Please select a subject.";
        
        // Subject-specific validation
        if (subject.toLowerCase().includes("distributor")) {
            if (!region?.trim()) errors.region = "Target region is required.";
            if (!businessYear) errors.businessYear = "Years in business is required.";
        } else if (subject.toLowerCase().includes("brand") || subject.toLowerCase().includes("labeling")) {
            if (!labelingType) errors.labelingType = "Service type is required.";
            if (!quantity?.trim()) errors.quantity = "Estimated monthly quantity is required.";
        }

        if (Object.keys(errors).length > 0) {
            return Response.json(
                { success: false, errors },
                { status: 422 }
            );
        }

        // Connect to MongoDB and save the contact
        await connectToDatabase();

        const contact = await Contact.create({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim().toLowerCase(),
            dialCode: dialCode || "+91",
            phone: phone.trim(),
            subject,
            message: message?.trim() || `Inquiry for ${subject}`,
            companyName: companyName?.trim(),
            industry: industry?.trim(),
            region: region?.trim(),
            businessYear,
            labelingType,
            quantity: quantity?.trim(),
        });

        return Response.json(
            {
                success: true,
                message: "Your message has been received. We will get back to you within 24 hours.",
                id: contact._id,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Contact API error:", error);
        return Response.json(
            {
                success: false,
                message: "Something went wrong. Please try again later.",
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectToDatabase();

        const contacts = await Contact.find({})
            .sort({ createdAt: -1 })
            .select("-__v")
            .lean();

        return Response.json(
            {
                success: true,
                count: contacts.length,
                data: contacts,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact GET error:", error);
        return Response.json(
            {
                success: false,
                message: "Failed to fetch contact submissions.",
            },
            { status: 500 }
        );
    }
}
