// Log.tsx
"use client";

import { FC, useState } from "react";
import Modal from "./Modal";  // تأكد من استيراد Modal
import { loginProps } from "./../../app/data/LoginData"; // تأكد من استيراد بيانات loginProps

interface LogProps {
    title: string;
    inputs: { id: string; label: string; type: string; placeholder: string }[];
    buttons: { text: string; actionType?: "googleSignIn" | "submit"; variant?: string }[];
    checkPrivacyText?: string;
    forgot?: string;
    signUpText: string;
    showCheck?: boolean;
    closeParentModal?: () => void; // لإغلاق الـ Modal الأب عند فتح الـ Modal الثاني
    openPopup: (type: "login" | "signUp") => void;
}

const Log: FC<LogProps> = ({
    title,
    inputs,
    buttons,
    checkPrivacyText = "",
    forgot = "",
    signUpText,
    showCheck = false,
    closeParentModal,
    openPopup,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSignUpClick = () => {
        openPopup(signUpText === "Sign Up" ? "signUp" : "login");
        // إغلاق الـ Modal الأولى عند فتح الثانية
        if (closeParentModal) {
            closeParentModal();  // إغلاق الـ Modal الأب
        }
        // تحديد المحتوى الذي سيتم عرضه في الـ Modal الثانية بناءً على النص
        if (signUpText === "Sign Up") {
            setIsModalOpen(true); // فتح الـ Modal للتسجيل
        } else if (signUpText === "Login") {
            setIsModalOpen(true); // فتح الـ Modal لتسجيل الدخول
        }
    };

    const handleButtonClick = (actionType?: string) => {
        if (actionType === "googleSignIn") {
            window.location.href = "/auth/google";
        } else if (actionType === "submit") {
            console.log("Form submitted");
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-700 ">{title}</h1>
            </div>
            <div className="flex flex-col space-y-4">
                {inputs.map((input) => (
                    <div key={input.id}>
                        <label htmlFor={input.id} className="block text-gray-600 mb-2">
                            {input.label}
                        </label>
                        <input
                            type={input.type}
                            id={input.id}
                            placeholder={input.placeholder}
                            className="w-full px-4 py-2 rounded border placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                ))}

                {showCheck ? (
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="privacyCheck" />
                        <label htmlFor="privacyCheck" className="text-gray-700">
                            {checkPrivacyText}
                        </label>
                    </div>
                ) : (
                    <div className="flex flex-row-reverse w-full ">
                        <span className="text-gray-500 cursor-pointer">{forgot}</span>
                    </div>
                )}

                <div className="flex flex-col items-center space-y-2">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(button.actionType)}
                            className={`w-full px-4 py-2 rounded-50 ${
                                button.variant === "primary"
                                    ? "bg-orange-500 text-white"
                                    : "border border-gray-400 text-gray-700"
                            }`}
                        >
                            {button.text}
                        </button>
                    ))}
                    <p className="text-gray-700">
                        Don’t have an account?{" "}
                        <span
                            className="text-orange-500 cursor-pointer"
                            onClick={handleSignUpClick}
                        >
                            {signUpText}
                        </span>
                    </p>
                </div>
            </div>

            {/* Modal لعرض Log */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    {signUpText === "Sign Up" ? (
                        <Log {...loginProps[1]} closeParentModal={() => setIsModalOpen(false)} />
                    ) : (
                        <Log {...loginProps[0]} closeParentModal={() => setIsModalOpen(false)} />
                    )}
                </Modal>
            )}
        </div>
    );
};

export default Log;



