import PatientForm from "@/components/Forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="text-dark-600 justify-items-endxl:text-left">
              &copy; 2024 Copyright, all rights reserved
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin accounts
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/patients-form-min.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
