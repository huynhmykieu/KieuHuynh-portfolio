import React from "react";
import CertificateCard from "@/components/CertificateCard";

export default function Certificates() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mx-auto max-w-6xl pt-4">
      <CertificateCard
        title="English Certificate"
        description="An EF test assessing listening and reading proficiency."
        imageSrc="/images/English.png"
        href="https://cert.efset.org/gsxYFs"
      />

      <CertificateCard
        title="Programming Certificates"
        description="Programming Certificates from Skillsoft"
        imageSrc="/images/skillsoft.png"
        href="https://skillsoft.digitalbadges.skillsoft.com/profile/kieumyhuynh736264/wallet"
      />

      <CertificateCard
        title="Information Security"
        description="Completed the Information Security course."
        imageSrc="/images/Information Security.jpg"
        href="https://drive.google.com/file/d/1ZDMgMdkawBq2YTR-_VXB_6m2Ncun3OFA/view"
      />

      <CertificateCard
        title="Export Compliance"
        description="Completed the Export Compliance course."
        imageSrc="/images/Export Compliance.png"
        href="https://drive.google.com/file/d/1G27MmvYIQr8eCzThf9HCLlyoVwLcfAr5/view"
      />

      <CertificateCard
        title="Data Privacy"
        description="Completed the Dimensions of Data Privacy course."
        imageSrc="/images/Data privacy.png"
        href="https://drive.google.com/file/d/1C-8NDhw0x6iN8sxAwHKQE-1ne0cmjROt/view"
      />

      <CertificateCard
        title="Business Ethics & Conduct's Code"
        description='Completed the Code of Business Ethics and Conduct ("COBEC") course.'
        imageSrc="/images/COBEC.png"
        href="https://drive.google.com/file/d/1Z3yvxkbly2b03P3xs50K8FX_WE3umn2W/view"
      />
    </div>
  );
}
