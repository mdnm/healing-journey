import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import Link from "next/link";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://app.chatgpt.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent layer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Política de Privacidade de {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Date: 9 November, 2023

1. Introduction

This Privacy Policy outlines how Healing Journey, accessible at https://healingjourney.com, collects, uses, and protects your personal information. By using our website and services, you consent to the data practices described in this policy.

2. Data Collection

We collect the following personal information:

Name
Email
Habits information
This data is essential for the personalization of your routine building experience.

3. Non-Personal Data Collection

Our website uses cookies to enhance your browsing experience and for analytical purposes.

4. Purpose of Data Collection

The personal data collected is used solely for order processing and the personalization of our services.

5. Data Sharing

Healing Journey does not share your personal data with any third parties.

6. Children's Privacy

Our services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children.

7. Updates to the Privacy Policy

We reserve the right to modify this privacy policy at any time. All updates will be communicated to users via email.

8. Contact Information

For any questions or comments regarding this privacy policy, please contact us at healingjourneylife@gmail.com.

Thank you for trusting Healing Journey with your personal development journey.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
