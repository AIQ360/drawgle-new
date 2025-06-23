import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import PricingTable from "@/components/payment/pricing-table"

export default async function SubscriptionPage() {
  // Get the current user from Supabase
  const supabase = await createClient()

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return <div className="flex items-center justify-center min-h-screen">Loading...</div>
    }

    return (
      <div className="container mx-auto px-4">
        <PricingTable userId={user.id} />
      </div>
    )
  } catch (error) {
    console.error("Error in subscription page:", error)
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }
}
