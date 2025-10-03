import { EmailVerification } from "../templates/email-verification";

export default function EmailVerificationPreview() {
  return (
    <EmailVerification
      userName="John Doe"
      verificationUrl="https://example.com/verify?token=abc123"
      appName="ODYSSEY"
      appUrl="https://example.com"
    />
  );
}
