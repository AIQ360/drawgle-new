import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import PublicHeader from "@/components/layouts/public-header"
import PublicFooter from "@/components/layouts/public-footer"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Check Your Email</CardTitle>
            <CardDescription className="text-center">We've sent a confirmation link to your email</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div className="flex justify-center">
              <Mail className="h-12 w-12 text-primary" />
            </div>
            <p>Please check your email and click the confirmation link to complete your registration.</p>
            <p className="text-sm text-muted-foreground">
              If you don't see the email, check your spam folder or try signing in.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/sign-in" passHref>
              <Button variant="outline">Go to Sign In</Button>
            </Link>
          </CardFooter>
        </Card>
      </main>
      <PublicFooter />
    </div>
  )
}
