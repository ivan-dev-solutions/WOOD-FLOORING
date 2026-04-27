import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Questionnaire() {
  const { register, handleSubmit, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    const formattedData = {
      floorType: data.woodType,
      size: data.jobSize,
      name: data.name,
      email: data.email,
      phone: data.phone,
      zipCode: data.zipCode,
      currentFloor: data.currentFloor,
    };

    try {
      const response = await axios.post("/api/submitForm", formattedData);
      console.log("Server Response:", response.data);
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error
      );
    }
  };

  return (
    <section
      id="questionnaire"
      className="relative py-16 lg:py-24 px-4 bg-cream-100 texture-grain overflow-hidden"
    >
      {/* Soft warm accents */}
      <div className="absolute inset-0 warm-glow-tl pointer-events-none" />
      <div className="absolute inset-0 warm-glow-br pointer-events-none" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Header — DARK text on cream */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-amber-800">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Get a Free Quote
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight text-stone-900">
            Ready to Transform Your Space?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            Tell us about your project and we&apos;ll get back to you shortly.
          </p>
        </div>

        {/* Card */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-warm-xl">
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)]">
            {/* Left column – trust/benefits */}
            <aside className="hidden lg:block bg-gradient-to-br from-amber-50 via-cream-100 to-white px-10 py-12 border-r border-amber-100">
              <h3 className="text-xs font-semibold text-amber-800 uppercase tracking-[0.18em]">
                What happens next
              </h3>

              <ul className="mt-6 space-y-4 text-sm text-stone-700">
                <li className="flex gap-3">
                  <span className="mt-0.5 h-7 w-7 flex items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold flex-shrink-0">
                    1
                  </span>
                  <p>
                    Quick review of your{" "}
                    <span className="font-semibold text-stone-900">floor type</span> and current condition.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-7 w-7 flex items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold flex-shrink-0">
                    2
                  </span>
                  <p>
                    A clear estimate based on{" "}
                    <span className="font-semibold text-stone-900">job size</span> and{" "}
                    <span className="font-semibold text-stone-900">demolition needs</span>.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-7 w-7 flex items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold flex-shrink-0">
                    3
                  </span>
                  <p>
                    Follow-up from{" "}
                    <span className="font-semibold text-stone-900">A&apos;s Flooring Inc.</span> to confirm details.
                  </p>
                </li>
              </ul>

              <div className="mt-8 p-5 rounded-2xl bg-white/80 border border-amber-100 text-xs text-stone-600">
                <p className="font-semibold text-stone-900 mb-1">
                  No commitment, no spam.
                </p>
                <p>We only use this information to prepare your quote.</p>
              </div>

              <a
                href="https://wa.me/16192076864?text=Hi!%20I%20would%20like%20to%20get%20a%20flooring%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-amber-200 bg-white px-4 py-3 text-sm font-semibold text-amber-900 hover:bg-amber-50 transition shadow-warm"
              >
                Prefer WhatsApp? Message us →
              </a>
            </aside>

            {/* Right column – form */}
            <div className="px-6 sm:px-10 py-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-3xl mb-3">✅</p>
                  <p className="text-xl font-semibold text-emerald-600">
                    Thank you! We will contact you soon.
                  </p>
                  <p className="text-sm text-stone-500 mt-2 max-w-md">
                    One of our specialists will reach out to confirm the details of your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-left">
                  {/* Project details */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide">
                      Project details
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Type of wood
                        </label>
                        <select
                          {...register("woodType")}
                          className="w-full rounded-2xl border border-stone-200 bg-cream-50 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                        >
                          <option>Hardwood</option>
                          <option>Vinyl</option>
                          <option>Laminate</option>
                          <option>Resilient</option>
                          <option>Bamboo</option>
                          <option>Carpet</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Current floor &amp; demolition
                        </label>
                        <select
                          {...register("currentFloor")}
                          className="w-full rounded-2xl border border-stone-200 bg-cream-50 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                        >
                          <option>It&apos;s clean, ready to install</option>
                          <option>Demolition needed</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Approximate job size (sq ft or rooms)
                      </label>
                      <input
                        {...register("jobSize")}
                        type="text"
                        placeholder="e.g. 1200 sq ft or 3 rooms"
                        className="w-full rounded-2xl border border-stone-200 bg-cream-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact info */}
                  <div className="space-y-4 border-t border-amber-100 pt-8">
                    <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide">
                      Your contact information
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Your name
                        </label>
                        <input
                          {...register("name")}
                          className="w-full rounded-2xl border border-stone-200 bg-cream-50 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Phone number
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          className="w-full rounded-2xl border border-stone-200 bg-cream-50 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Email (optional)
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          className="w-full rounded-2xl border border-stone-200 bg-cream-50 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          ZIP code
                        </label>
                        <input
                          {...register("zipCode")}
                          type="text"
                          className="w-full rounded-2xl border border-stone-200 bg-cream-50 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-5 py-4 text-base font-semibold text-white shadow-warm-lg hover:bg-amber-600 hover:shadow-warm-xl transition-all duration-150 active:scale-[0.99]"
                    >
                      Submit Request <span>🚀</span>
                    </button>

                    <p className="mt-3 text-xs text-stone-500 text-center">
                      We only contact you about your quote. No spam.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}