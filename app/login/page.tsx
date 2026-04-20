"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleSubmit = async () => {
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ password }),
            headers: { "Content-Type": "application/json" },
        });

        // 変更後
        if (res.ok) {
            window.location.href = "/";
        } else {
            setError(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm px-6">
                <h1 className="text-2xl font-light mb-8 text-center">Portfolio</h1>
                <input
                    type="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    className="w-full border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors mb-4"
                />
                {error && (
                    <p className="text-xs text-red-400 mb-4">パスワードが違います</p>
                )}
                <button
                    onClick={handleSubmit}
                    className="w-full bg-neutral-900 text-white text-sm py-3 hover:bg-neutral-700 transition-colors"
                >
                    Enter
                </button>
            </div>
        </div>
    );
}