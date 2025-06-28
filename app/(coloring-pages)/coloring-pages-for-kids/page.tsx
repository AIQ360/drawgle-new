import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Coloring Pages for Kids - Free Printable Children's Coloring Sheets | Drawgle",
  description:
    "Discover hundreds of free printable coloring pages for kids of all ages. Fun, educational coloring sheets featuring animals, cartoons, and more for children.",
  openGraph: {
    title: "Coloring Pages for Kids - Free Printable Children's Coloring Sheets",
    description:
      "Discover hundreds of free printable coloring pages for kids of all ages. Fun, educational coloring sheets featuring animals, cartoons, and more.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Children coloring pages with crayons",
      },
    ],
  },
}

export default function KidsColoringPages() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/coloring-pages" className="hover:underline">
              Coloring Pages
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            <span aria-current="page">Coloring Pages for Kids</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-12 mb-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Printable Coloring Pages for Kids</h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Discover over 1000+ free printable coloring pages designed specifically for children of all ages. Our
            collection includes educational coloring sheets, seasonal themes, animals, cartoons, and age-appropriate
            designs that promote creativity, learning, and fine motor skill development. Perfect for parents, teachers,
            and caregivers looking for engaging activities for toddlers, preschoolers, and elementary school children.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="#toddler-coloring"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Ages 1-3 (Toddler)
            </Link>
            <Link
              href="#preschool-coloring"
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Ages 3-5 (Preschool)
            </Link>
            <Link
              href="#elementary-coloring"
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              Ages 6-10 (Elementary)
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Coloring Pages Are Essential for Child Development</h2>
        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Coloring pages for kids serve as powerful educational tools that combine fun with learning. Research shows
            that regular coloring activities significantly contribute to children's cognitive, physical, and emotional
            development. Our free printable coloring sheets are designed to maximize these developmental benefits while
            keeping children engaged and entertained.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Motor Skills Development</h3>
            <ul className="space-y-3">
              <li>
                <strong>Fine Motor Control:</strong> Coloring within lines strengthens hand muscles and improves grip
                control essential for writing.
              </li>
              <li>
                <strong>Hand-Eye Coordination:</strong> Coordinating visual input with hand movements enhances spatial
                awareness and precision.
              </li>
              <li>
                <strong>Bilateral Coordination:</strong> Using both hands together (one to hold paper, one to color)
                develops brain hemisphere communication.
              </li>
              <li>
                <strong>Pencil Grip Development:</strong> Regular coloring practice establishes proper writing tool grip
                patterns.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-green-600">Cognitive & Academic Benefits</h3>
            <ul className="space-y-3">
              <li>
                <strong>Color Recognition & Theory:</strong> Learning primary, secondary colors and color relationships.
              </li>
              <li>
                <strong>Pattern Recognition:</strong> Identifying and completing visual patterns enhances mathematical
                thinking.
              </li>
              <li>
                <strong>Focus & Concentration:</strong> Sustained attention during coloring improves academic
                performance.
              </li>
              <li>
                <strong>Following Instructions:</strong> Coloring activities teach children to follow directions and
                complete tasks.
              </li>
              <li>
                <strong>Pre-Writing Skills:</strong> Coloring prepares children for letter formation and writing
                readiness.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Emotional & Social Growth</h3>
            <ul className="space-y-3">
              <li>
                <strong>Self-Expression:</strong> Color choices and artistic decisions allow children to express
                personality and emotions.
              </li>
              <li>
                <strong>Confidence Building:</strong> Completing coloring pages provides sense of accomplishment and
                boosts self-esteem.
              </li>
              <li>
                <strong>Stress Relief:</strong> Coloring activities have calming effects, reducing anxiety and promoting
                relaxation.
              </li>
              <li>
                <strong>Social Interaction:</strong> Group coloring activities encourage sharing, cooperation, and
                communication.
              </li>
              <li>
                <strong>Cultural Awareness:</strong> Themed coloring pages introduce children to different cultures and
                traditions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Age-Specific Coloring Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Age-Appropriate Coloring Pages for Every Child</h2>

        {/* Toddler Section */}
        <div id="toddler-coloring" className="mb-12 scroll-mt-16">
          <h3 className="text-2xl font-bold mb-6 text-blue-600">Toddler Coloring Pages (Ages 1-3)</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 mb-4">
                Our toddler coloring pages feature extra-large designs with thick, bold outlines perfect for little
                hands just beginning to explore coloring. These simple coloring sheets focus on basic shapes, familiar
                objects, and large animals that toddlers can easily recognize and relate to.
              </p>
              <h4 className="text-xl font-semibold mb-3">Perfect for Toddlers:</h4>
              <ul className="space-y-2 mb-4">
                <li>
                  • <strong>Simple Shapes:</strong> Circles, squares, triangles, and hearts with 1-2 inch thick borders
                </li>
                <li>
                  • <strong>Large Animals:</strong> Big, friendly faces of cats, dogs, elephants, and farm animals
                </li>
                <li>
                  • <strong>Everyday Objects:</strong> Balls, cars, houses, and toys with minimal detail
                </li>
                <li>
                  • <strong>Single Focus:</strong> One main object per page to avoid overwhelming young children
                </li>
                <li>
                  • <strong>Safety Considerations:</strong> All designs avoid small parts or complex details
                </li>
              </ul>
              <Link
                href="/sign-in"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Create Toddler Pages →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                  <div className="aspect-square relative">
                    <Image
                      src={`/placeholder.svg?height=150&width=150&query=simple%20toddler%20coloring%20page%20${i}`}
                      alt={`Simple toddler coloring page ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preschool Section */}
        <div id="preschool-coloring" className="mb-12 scroll-mt-16">
          <h3 className="text-2xl font-bold mb-6 text-green-600">Preschool Coloring Pages (Ages 3-5)</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 mb-4">
                Preschool coloring pages bridge the gap between toddler simplicity and school-age complexity. These
                designs introduce more detail while remaining manageable for developing fine motor skills. Perfect for
                children who have mastered basic coloring and are ready for new challenges.
              </p>
              <h4 className="text-xl font-semibold mb-3">Preschool Features:</h4>
              <ul className="space-y-2 mb-4">
                <li>
                  • <strong>Educational Themes:</strong> Alphabet letters, numbers 1-10, and basic counting activities
                </li>
                <li>
                  • <strong>Story Characters:</strong> Popular fairy tale characters and friendly cartoon animals
                </li>
                <li>
                  • <strong>Seasonal Activities:</strong> Holiday themes, weather patterns, and seasonal changes
                </li>
                <li>
                  • <strong>Social Situations:</strong> Family scenes, playground activities, and community helpers
                </li>
                <li>
                  • <strong>Nature Exploration:</strong> Flowers, trees, insects, and simple landscapes
                </li>
              </ul>
              <Link
                href="/dashboard"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
              >
                Create Preschool Pages
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                  <div className="aspect-square relative">
                    <Image
                      src={`/placeholder.svg?height=150&width=150&query=preschool%20coloring%20page%20${i}`}
                      alt={`Preschool coloring page ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Elementary Section */}
        <div id="elementary-coloring" className="mb-12 scroll-mt-16">
          <h3 className="text-2xl font-bold mb-6 text-purple-600">Elementary Coloring Pages (Ages 6-10)</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 mb-4">
                Elementary school coloring pages offer intricate designs that challenge developed motor skills while
                incorporating educational content aligned with school curricula. These detailed coloring sheets support
                academic learning across multiple subjects.
              </p>
              <h4 className="text-xl font-semibold mb-3">Elementary Features:</h4>
              <ul className="space-y-2 mb-4">
                <li>
                  • <strong>Academic Integration:</strong> Math problems, science concepts, and geography themes
                </li>
                <li>
                  • <strong>Complex Patterns:</strong> Mandala-style designs, geometric patterns, and detailed scenes
                </li>
                <li>
                  • <strong>Historical Themes:</strong> Ancient civilizations, historical figures, and cultural
                  celebrations
                </li>
                <li>
                  • <strong>Advanced Animals:</strong> Realistic animal anatomy, habitats, and life cycles
                </li>
                <li>
                  • <strong>Creative Challenges:</strong> Design-your-own sections and open-ended artistic prompts
                </li>
              </ul>
              <Link
                href="/dashboard/create"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
              >
                Create Custom Elementary Pages
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                  <div className="aspect-square relative">
                    <Image
                      src={`/placeholder.svg?height=150&width=150&query=elementary%20school%20coloring%20page%20${i}`}
                      alt={`Elementary school coloring page ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Coloring Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Educational Coloring Pages by Subject</h2>
        <p className="text-lg text-gray-700 mb-8">
          Transform learning into an enjoyable experience with our subject-specific educational coloring pages. Each
          category is designed to reinforce academic concepts while providing creative expression opportunities. These
          printable coloring sheets align with early childhood education standards and support homeschool curricula.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Alphabet & Phonics Coloring Pages</h3>
            <p className="mb-4">
              Letter recognition, phonetic sounds, and vocabulary building through engaging coloring activities. Each
              letter features multiple themed pages with corresponding objects and animals.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Upper and lowercase letter practice</li>
              <li>• Beginning sound associations</li>
              <li>• Sight word integration</li>
              <li>• Handwriting preparation</li>
            </ul>
        
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Math & Numbers Coloring Pages</h3>
            <p className="mb-4">
              Number recognition, counting skills, and basic math concepts presented through visual and tactile coloring
              experiences.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Number formation practice (1-100)</li>
              <li>• Counting and quantity concepts</li>
              <li>• Basic addition and subtraction</li>
              <li>• Shape and pattern recognition</li>
            </ul>
        
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Science & Nature Coloring Pages</h3>
            <p className="mb-4">
              Explore the natural world through detailed coloring pages featuring plants, animals, weather patterns, and
              scientific concepts.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Animal habitats and life cycles</li>
              <li>• Plant growth and anatomy</li>
              <li>• Weather and seasons</li>
              <li>• Human body systems</li>
            </ul>
          
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Geography & Culture Coloring Pages</h3>
            <p className="mb-4">
              Discover world cultures, landmarks, maps, and geographical features through educational coloring
              activities.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• World landmarks and monuments</li>
              <li>• Cultural celebrations and traditions</li>
              <li>• Maps and geographical features</li>
              <li>• Flags and national symbols</li>
            </ul>
        
          </div>

          <div className="bg-red-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">History & Social Studies</h3>
            <p className="mb-4">
              Learn about historical events, important figures, and social concepts through engaging coloring
              activities.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Historical figures and events</li>
              <li>• Community helpers and careers</li>
              <li>• Government and citizenship</li>
              <li>• Timeline activities</li>
            </ul>
        
          </div>

          <div className="bg-teal-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Art & Creativity Pages</h3>
            <p className="mb-4">
              Develop artistic skills and creative thinking through open-ended coloring activities and art technique
              exploration.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Color theory and mixing</li>
              <li>• Pattern and texture exploration</li>
              <li>• Famous artwork recreations</li>
              <li>• Design challenges</li>
            </ul>
      
          </div>
        </div>
      </section>

      {/* Seasonal and Holiday Coloring Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Seasonal & Holiday Coloring Pages</h2>
        <p className="text-lg text-gray-700 mb-8">
          Celebrate every season and holiday with our extensive collection of themed coloring pages. From traditional
          holidays to seasonal changes, these printable coloring sheets help children connect with annual cycles,
          cultural traditions, and seasonal activities while developing artistic skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Spring Coloring Pages</h3>
            <p className="text-gray-700 mb-4">
              Welcome spring with coloring pages featuring blooming flowers, baby animals, Easter celebrations, and
              outdoor activities. Perfect for teaching about growth, renewal, and seasonal changes.
            </p>
            <ul className="space-y-2">
              <li>• Easter bunnies, eggs, and spring celebrations</li>
              <li>• Flower gardens, butterflies, and insects</li>
              <li>• Baby farm animals and wildlife</li>
              <li>• Spring weather and outdoor activities</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Summer Coloring Pages</h3>
            <p className="text-gray-700 mb-4">
              Enjoy summer fun with beach scenes, camping adventures, and outdoor sports coloring pages. Great for
              vacation activities and summer learning programs.
            </p>
            <ul className="space-y-2">
              <li>• Beach scenes, ocean animals, and water activities</li>
              <li>• Camping, hiking, and nature exploration</li>
              <li>• Summer fruits, ice cream, and picnics</li>
              <li>• Sports and outdoor games</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Fall/Autumn Coloring Pages</h3>
            <p className="text-gray-700 mb-4">
              Celebrate autumn with harvest themes, changing leaves, and Halloween fun. These pages teach about seasonal
              transitions and harvest celebrations.
            </p>
            <ul className="space-y-2">
              <li>• Pumpkins, scarecrows, and harvest festivals</li>
              <li>• Halloween costumes, trick-or-treating</li>
              <li>• Thanksgiving turkeys and gratitude themes</li>
              <li>• Fall leaves, acorns, and forest animals</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Winter Coloring Pages</h3>
            <p className="text-gray-700 mb-4">
              Embrace winter with snowmen, holiday celebrations, and cozy indoor activities. Perfect for holiday parties
              and winter break activities.
            </p>
            <ul className="space-y-2">
              <li>• Christmas trees, Santa, and holiday traditions</li>
              <li>• Snowmen, snowflakes, and winter sports</li>
              <li>• New Year celebrations and resolutions</li>
              <li>• Winter animals and hibernation themes</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/spring-coloring-pages" className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Spring coloring pages for kids"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="font-bold group-hover:text-blue-600 transition">Spring Pages</h4>
              </div>
            </div>
          </Link>

          <Link href="/summer-coloring-pages" className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Summer coloring pages for kids"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="font-bold group-hover:text-blue-600 transition">Summer Pages</h4>
              </div>
            </div>
          </Link>

          <Link href="/fall-coloring-pages" className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Fall autumn coloring pages for kids"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="font-bold group-hover:text-blue-600 transition">Fall Pages</h4>
              </div>
            </div>
          </Link>

          <Link href="/winter-coloring-pages" className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Winter Christmas coloring pages for kids"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="font-bold group-hover:text-blue-600 transition">Winter Pages</h4>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Comprehensive Tips Section */}
      <section className="mb-16 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6">Complete Guide: Maximizing Coloring Benefits for Children</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Setting Up the Perfect Coloring Environment</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5 text-xs">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Proper Lighting:</span> Ensure adequate natural or LED lighting to prevent
                  eye strain and allow accurate color perception.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5 text-xs">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Comfortable Seating:</span> Use age-appropriate chairs and tables that
                  promote good posture and arm support.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5 text-xs">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Organization System:</span> Create designated storage for coloring
                  supplies and finished artwork.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5 text-xs">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Distraction-Free Zone:</span> Minimize noise and visual distractions to
                  promote focus and concentration.
                </div>
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-4">Choosing the Right Coloring Tools</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Ages 1-3 (Toddlers):</h4>
                <p className="text-sm">Large crayons, washable markers, finger paints</p>
              </div>
              <div>
                <h4 className="font-semibold">Ages 3-5 (Preschool):</h4>
                <p className="text-sm">Regular crayons, colored pencils, washable markers, watercolors</p>
              </div>
              <div>
                <h4 className="font-semibold">Ages 6+ (Elementary):</h4>
                <p className="text-sm">Fine-tip markers, colored pencils, gel pens, advanced art supplies</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Educational Enhancement Strategies</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5 text-xs">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Vocabulary Building:</span> Discuss colors, shapes, and objects while
                  coloring to expand language skills.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5 text-xs">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Storytelling Integration:</span> Create narratives about coloring page
                  characters and scenes.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5 text-xs">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Cross-Curricular Connections:</span> Link coloring activities to math,
                  science, and social studies lessons.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5 text-xs">
                  ✓
                </div>
                <div>
                  <span className="font-bold">Cultural Exploration:</span> Use themed pages to discuss different
                  cultures and traditions.
                </div>
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-4">Troubleshooting Common Challenges</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Child Won't Stay Within Lines:</h4>
                <p className="text-sm">Normal developmental stage; focus on effort rather than perfection</p>
              </div>
              <div>
                <h4 className="font-semibold">Limited Color Choices:</h4>
                <p className="text-sm">Encourage experimentation; there are no "wrong" color choices</p>
              </div>
              <div>
                <h4 className="font-semibold">Short Attention Span:</h4>
                <p className="text-sm">Start with simpler pages; gradually increase complexity</p>
              </div>
              <div>
                <h4 className="font-semibold">Perfectionism Issues:</h4>
                <p className="text-sm">Emphasize process over product; celebrate creative choices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About Kids' Coloring Pages</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <FaqItem
            question="What age should children start using coloring pages?"
            answer="Children can begin enjoying coloring pages as early as 12-18 months with large, simple designs and chunky crayons. Toddlers (ages 1-3) benefit from extra-large coloring pages with thick borders, while preschoolers (ages 3-5) can handle more detailed designs. Elementary school children (ages 6-10) are ready for complex, educational coloring pages that challenge their developed fine motor skills."
          />

          <FaqItem
            question="How do I choose age-appropriate coloring pages for my child?"
            answer="Select coloring pages based on your child's developmental stage rather than chronological age. Look for: thick, bold lines for beginners; familiar objects and simple shapes for toddlers; moderate detail and educational themes for preschoolers; and complex patterns with academic content for school-age children. Always consider your child's attention span, fine motor development, and interests when choosing coloring pages."
          />

          <FaqItem
            question="Are digital coloring pages as beneficial as printed ones?"
            answer="While digital coloring apps can be engaging, printed coloring pages offer unique developmental benefits including tactile feedback, fine motor skill development through physical tool manipulation, and reduced screen time. Printed pages also allow for display and sharing of completed artwork, boosting confidence and pride in accomplishments. We recommend a balance of both digital and physical coloring activities."
          />

          <FaqItem
            question="How can I use coloring pages for educational purposes?"
            answer="Transform coloring time into learning opportunities by: discussing colors, shapes, and patterns; incorporating counting and letter recognition; exploring themes like animals, geography, or science; encouraging storytelling about the images; connecting coloring pages to books or lessons; and using completed pages as starting points for creative writing or further research projects."
          />

          <FaqItem
            question="What should I do if my child gets frustrated while coloring?"
            answer="Frustration during coloring is normal and can be addressed by: offering simpler designs; focusing on effort rather than perfection; providing encouragement and positive feedback; taking breaks when needed; demonstrating that 'mistakes' can become creative opportunities; and ensuring the coloring environment is comfortable and distraction-free. Remember that coloring should be enjoyable, not stressful."
          />

          <FaqItem
            question="How can coloring pages help children with special needs?"
            answer="Coloring pages offer therapeutic benefits for children with various special needs: improving focus and attention for ADHD; providing calming sensory input for autism spectrum disorders; developing fine motor skills for physical disabilities; building confidence through achievable goals; and offering non-verbal expression opportunities for communication challenges. Consult with occupational therapists for personalized recommendations."
          />

          <FaqItem
            question="Can I use these coloring pages in my classroom or daycare?"
            answer="Yes! Our free printable coloring pages are perfect for educational settings. Teachers and caregivers can use them for: quiet time activities; reward systems; curriculum reinforcement; holiday celebrations; indoor recess activities; and parent-child homework projects. Many educators integrate our educational coloring pages into lesson plans across multiple subjects."
          />

          <FaqItem
            question="How do I print coloring pages for the best results?"
            answer="For optimal printing results: use white or light-colored paper (20lb weight minimum); print at 100% scale to maintain proper proportions; ensure your printer has adequate ink levels; choose 'high quality' or 'best' print settings; consider cardstock for durability; and test print one page before printing multiple copies. Store printed pages flat to prevent curling."
          />
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Coloring Pages for Kids - Free Printable Children's Coloring Sheets",
            description:
              "Discover hundreds of free printable coloring pages for kids of all ages. Fun, educational coloring sheets featuring animals, cartoons, and more for children.",
            url: "https://drawgle.in/coloring-pages-for-kids",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://drawgle.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Coloring Pages",
                  item: "https://drawgle.in/coloring-pages",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Coloring Pages for Kids",
                  item: "https://drawgle.in/coloring-pages-for-kids",
                },
              ],
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  url: "https://drawgle.in/toddler-coloring-pages",
                  name: "Toddler Coloring Pages",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  url: "https://drawgle.in/preschool-coloring-pages",
                  name: "Preschool Coloring Pages",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  url: "https://drawgle.in/elementary-coloring-pages",
                  name: "Elementary Coloring Pages",
                },
              ],
            },
            about: {
              "@type": "Thing",
              name: "Children's Educational Activities",
              description: "Free printable coloring pages designed for child development and education",
            },
            audience: {
              "@type": "Audience",
              audienceType: "Parents, Teachers, Caregivers",
              geographicArea: "Global",
            },
          }),
        }}
      />
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="text-xl font-bold mb-3">{question}</h3>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  )
}
