import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    // for further development if i need use email service or backend to use.
    console.log("Contact Form Data:", data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Contact <span className="text-[#ff2056]">Us</span>
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl">
            Have questions or need support? Reach out to us and we'll respond
            promptly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-md"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="John Doe"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff2056]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="john.doe@example.com"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff2056]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                {...register("subject", { required: true })}
                placeholder="Subject"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff2056]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                placeholder="Your message..."
                rows={5}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff2056]"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-[#ff2056] text-white rounded-lg hover:bg-[#e01c4c] transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Office
              </h3>
              <p className="text-gray-600">
                123 Wallet Street, Dhaka, Bangladesh
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email
              </h3>
              <p className="text-gray-600">support@digitalwallet.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">+880 1712 345678</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Working Hours
              </h3>
              <p className="text-gray-600">Mon – Fri, 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
