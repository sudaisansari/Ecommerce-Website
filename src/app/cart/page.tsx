import StripeCheckOutButton from "@/components/shared/StripeCheckOutButton";
import React from 'react'

const page = () => {
    return (
        <div className="flex min-h-screen flex-col items-center p-24">
            <div>Stripe Check Out</div>
            <StripeCheckOutButton />
        </div>
    )
}

export default page