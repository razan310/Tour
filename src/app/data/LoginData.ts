// loginData.ts

export const loginProps = [
    {
        title: "Login",
        inputs: [
            { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
            { id: "password", label: "Password", type: "password", placeholder: "Enter your password" },
        ],
        buttons: [
            { text: "Sign In", actionType: "submit" as const, variant: "primary" },
            { text: "Sign In with Google", actionType: "googleSignIn" as const, variant: "secondary" },
        ],
        showCheck: false,
        forgot: "Forgot your password?",
        signUpText: "Sign Up", // جعل signUpText نصًا فقط هنا
    },
    {
        title: "Create Account",
        inputs: [
            { id: "username", label: "Name and Surname", type: "text", placeholder: "Enter your name and surname" },
            { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
            { id: "password", label: "Password", type: "password", placeholder: "Enter your password" },
        ],
        buttons: [
            { text: "Sign In", actionType: "submit" as const, variant: "primary" },
            { text: "Sign In with Google", actionType: "googleSignIn" as const, variant: "secondary" },
        ],
        showCheck: true,
        checkPrivacyText: "I agree to the privacy policy",
        signUpText: "Login", // هنا أيضًا signUpText نصًا فقط
    },
];
