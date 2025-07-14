// BillingPlans.tsx
export default function BillingPlans() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl">
            {/* Header */}
            <h2 className="text-xl font-semibold">Billing plans</h2>
            <p className="text-gray-500">
                Explore billing plans tailored for teams of all sizes...
            </p>

            {/* Warning banner */}
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-3 mt-4 rounded flex justify-between items-center">
                <span>You will be downgraded to Basic plan...</span>
                <button className="text-sm bg-yellow-200 px-3 py-1 rounded">Cancel downgrade</button>
            </div>

            {/* Plans */}
            <div className="space-y-4 mt-6">
                {/* Plan 1 */}
                {/* Plan 2 (recommended) */}
                {/* Plan 3 (selected) */}
            </div>

            {/* Save button */}
            <div className="mt-6 text-right">
                <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded" disabled>
                    Save changes
                </button>
            </div>
        </div>
    );
}
