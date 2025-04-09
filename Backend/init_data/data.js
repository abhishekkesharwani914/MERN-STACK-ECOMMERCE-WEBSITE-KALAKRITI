const data= [
    {
        "title": "King Panel Bed",
        "description": "A spacious king panel bed with a sturdy frame and elegant design.",
        "specifications": {
            "dimensions": "80\" W x 86\" D x 60\" H",
            "material": "Solid wood",
            "color": "Dark Brown",
            "weight": "180 lbs"
        },
        "category": "Bedroom Sets",
        "price": 899.99,
        "image_url": "https://img.freepik.com/premium-photo/3d-rendering-design-interior-bed-room-with-wall-panel-padded-wall_437476-227.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Single Panel Bed",
        "description": "A compact single panel bed, perfect for smaller bedrooms or guest rooms.",
        "specifications": {
            "dimensions": "42\" W x 78\" D x 48\" H",
            "material": "Pine wood",
            "color": "Natural",
            "weight": "90 lbs"
        },
        "category": "Bedroom Sets",
        "price": 499.99,
        "image_url": "https://img.freepik.com/free-photo/double-bed-with-white-pillows_1203-1328.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Twin Panel Bed",
        "description": "A twin panel bed suitable for children's rooms, featuring a simple and sturdy design.",
        "specifications": {
            "dimensions": "45\" W x 80\" D x 50\" H",
            "material": "Engineered wood",
            "color": "White",
            "weight": "95 lbs"
        },
        "category": "Bedroom Sets",
        "price": 399.99,
        "image_url": "https://images.unsplash.com/photo-1613940512699-fc9150817bb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VHdpbiUyMFBhbmVsJTIwQmVkfGVufDB8fDB8fHww"
    },
    {
        "title": "Modern Dresser",
        "description": "A sleek modern dresser with six spacious drawers for ample storage.",
        "specifications": {
            "dimensions": "60\" W x 18\" D x 34\" H",
            "material": "MDF with laminate finish",
            "color": "Bedroom Sets",
            "weight": "120 lbs"
        },
        "category": "Bedroom Sets",
        "price": 599.99,
        "image_url": "https://img.freepik.com/free-photo/view-modern-entryway-with-interior-decor_23-2150791022.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Classic Nightstand",
        "description": "A classic nightstand with a drawer and open shelf for bedside storage.",
        "specifications": {
            "dimensions": "24\" W x 16\" D x 24\" H",
            "material": "Solid oak",
            "color": "Espresso",
            "weight": "35 lbs"
        },
        "category": "Bedroom Sets",
        "price": 199.99,
        "image_url": "https://img.freepik.com/free-photo/ornate-table-art-nouveau-style_23-2150975529.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Wardrobe Armoire",
        "description": "A spacious wardrobe armoire with hanging space and shelves for clothing organization.",
        "specifications": {
            "dimensions": "40\" W x 22\" D x 72\" H",
            "material": "Composite wood",
            "color": "Cherry",
            "weight": "200 lbs"
        },
        "category": "Bedroom Sets",
        "price": 799.99,
        "image_url": "https://img.freepik.com/premium-photo/wardrobe-apartment-interior-design_278455-5143.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Bedroom Bench",
        "description": "An upholstered bedroom bench perfect for seating at the foot of the bed.",
        "specifications": {
            "dimensions": "48\" W x 18\" D x 20\" H",
            "material": "Fabric and wood",
            "color": "Gray",
            "weight": "40 lbs"
        },
        "category": "Bedroom Sets",
        "price": 249.99,
        "image_url": "https://img.freepik.com/free-photo/still-life-shoe-rack-indoors_23-2150960687.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Chest of Drawers",
        "description": "A tall chest of drawers offering five drawers for vertical storage.",
        "specifications": {
            "dimensions": "30\" W x 18\" D x 50\" H",
            "material": "Birch wood",
            "color": "Mahogany",
            "weight": "110 lbs"
        },
        "category": "Bedroom Sets",
        "price": 549.99,
        "image_url": "https://img.freepik.com/premium-photo/wooden-chest-drawers-with-floral-branches-vase_93675-52181.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Vanity Set",
        "description": "A vanity set with mirror and stool, providing a stylish space for grooming.",
        "specifications": {
            "dimensions": "36\" W x 18\" D x 52\" H",
            "material": "Wood and glass",
            "color": "White",
            "weight": "75 lbs"
        },
        "category": "Bedroom Sets",
        "price": 329.99,
        "image_url": "https://img.freepik.com/premium-photo/masculine-dressing-table-masculine-dressing-table-with-dark-wood-finishes_1375-32821.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Storage Ottoman",
        "description": "A multifunctional storage ottoman that doubles as seating and storage.",
        "specifications": {
            "dimensions": "40\" W x 20\" D x 18\" H",
            "material": "Faux leather",
            "color": "Black",
            "weight": "30 lbs"
        },
        "category": "Bedroom Sets",
        "price": 179.99,
        "image_url": "https://img.freepik.com/premium-photo/spacious-stylish-contemporary-storage-ottoman-ideal-modern-living-rooms-creative-storage-solutions_506134-52846.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "HON 10500 Series L-Shaped Desk",
        "description": "A durable L-shaped desk from HON's 10500 Series, offering ample workspace and storage solutions for modern offices.",
        "specifications": {
            "dimensions": "72\" W x 84\" D x 29.5\" H",
            "material": "Laminate and wood",
            "color": "Mahogany",
            "weight": "350 lbs"
        },
        "category": "Office Sets",
        "price": 1250.00,
        "image_url": "hhttps://img.freepik.com/premium-photo/desk-office_692498-5965.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Steelcase Series 1 Office Chair",
        "description": "An ergonomic office chair from Steelcase, designed to provide comfort and support during long working hours.",
        "specifications": {
            "dimensions": "24.5\" W x 21\" D x 37.25\" H",
            "material": "Mesh and fabric upholstery",
            "color": "Graphite",
            "weight": "29 lbs"
        },
        "category": "Office Sets",
        "price": 495.00,
        "image_url": "https://www.steelcase.com/products/office-chairs/series-1/"
    },
    {
        "title": "Herman Miller Aeron Chair",
        "description": "A high-performance ergonomic chair from Herman Miller, known for its comfort and advanced support features.",
        "specifications": {
            "dimensions": "27\" W x 16.75\" D x 41\" H",
            "material": "Pellicle mesh",
            "color": "Carbon",
            "weight": "41 lbs"
        },
        "category": "Office Sets",
        "price": 1395.00,
        "image_url": "https://img.freepik.com/premium-photo/modern-design-office-chair-with-white-frame-gray-fabric-seat_958808-30397.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Allsteel Stride Bench",
        "description": "A versatile benching system from Allsteel, designed to support collaborative work environments.",
        "specifications": {
            "dimensions": "60\" W x 30\" D x 29\" H",
            "material": "Laminate and metal",
            "color": "White",
            "weight": "120 lbs"
        },
        "category": "Office Sets",
        "price": 850.00,
        "image_url": "https://media.istockphoto.com/id/2189143584/photo/empty-bench-in-park.jpg?s=612x612&w=0&k=20&c=LASqKNWOBhxVaxoxWdXEalNdvZq6FHxaNGj1mPpSfMM="
    },
    {
        "title": "Teknion Interpret Workstation",
        "description": "A customizable workstation from Teknion's Interpret series, offering flexibility and adaptability for various office needs.",
        "specifications": {
            "dimensions": "Various configurations available",
            "material": "Laminate and metal",
            "color": "Multiple finishes",
            "weight": "Varies by configuration"
        },
        "category": "Office Sets",
        "price": 1800.00,
        "image_url": "https://media.istockphoto.com/id/2158604647/photo/the-modern-open-plan-office-with-a-clean-organized-layout.jpg?s=612x612&w=0&k=20&c=f70tuF3lQVeHpIn7jsREsSfto2wKnSdFDqC-PFGefvk="
    },
    {
        "title": "Haworth Zody Task Chair",
        "description": "An ergonomic task chair from Haworth, combining comfort with sustainability and advanced lumbar support.",
        "specifications": {
            "dimensions": "29\" W x 29\" D x 38\" H",
            "material": "Mesh and fabric upholstery",
            "color": "Black",
            "weight": "40 lbs"
        },
        "category": "Office Sets",
        "price": 895.00,
        "image_url": "https://media.istockphoto.com/id/1794313748/photo/modern-accent-chairs-right-side-view-3d-rendering-high-quality-transparent-background-image.jpg?s=612x612&w=0&k=20&c=PwVZBJz-5p2_8Bvh9s-oExBBFQcTBoHLnO48urkVrE4="
    },
    {
        "title": "Knoll Reff Profiles Desk",
        "description": "A sophisticated desk from Knoll's Reff Profiles collection, featuring clean lines and premium materials.",
        "specifications": {
            "dimensions": "72\" W x 36\" D x 29\" H",
            "material": "Wood veneer and metal",
            "color": "Walnut",
            "weight": "300 lbs"
        },
        "category": "Office Sets",
        "price": 3200.00,
        "image_url": "https://media.istockphoto.com/id/1327457730/photo/empty-office-desks.jpg?s=612x612&w=0&k=20&c=9YnGWvhm7u6608FxpwwMJT-_o1vsFIYV8YM2bV0PdNM="
    },
    {
        "title": "HON Ignition 2.0 Mesh Back Chair",
        "description": "A customizable office chair from HON's Ignition 2.0 series, offering breathable mesh back and ergonomic adjustments.",
        "specifications": {
            "dimensions": "27\" W x 30\" D x 44\" H",
            "material": "Mesh and fabric upholstery",
            "color": "Black",
            "weight": "38 lbs"
        },
        "category": "Office Sets",
        "price": 399.00,
        "image_url": "https://media.istockphoto.com/id/2079021604/photo/cubicle-and-office-furniture-in-office-room.jpg?s=612x612&w=0&k=20&c=OsIhJsF3pc57ickJvJPY3sqa9cLFHE5CoYaPBufRpgY="
    },
    {
        "title": "Geiger Tuxedo Conference Table",
        "description": "A refined conference table from Geiger's Tuxedo collection, perfect for executive meeting spaces.",
        "specifications": {
            "dimensions": "120\" W x 48\" D x 29\" H",
            "material": "Wood veneer and metal",
            "color": "Ebony",
            "weight": "500 lbs"
        },
        "category": "Office Sets",
        "price": 7500.00,
        "image_url": "https://media.istockphoto.com/id/154048993/photo/office.jpg?s=612x612&w=0&k=20&c=s7-Bvx4mUj_bomVI1xzEXwpZ4F6B2sTiyQJHtiiDtxU="
    },
    {
        "title": "OfficeSource OS Laminate U-Shape Desk",
        "description": "A functional U-shaped desk from OfficeSource's OS Laminate collection, providing ample workspace and storage.",
        "specifications": {
            "dimensions": "71\" W x 108\" D x 29\" H",
            "material": "Laminate",
            "color": "Cherry",
            "weight": "400 lbs"
        },
        "category": "Office Sets",
        "price": 1150.00,
        "image_url": "https://media.istockphoto.com/id/1268609522/photo/office-furniture.jpg?s=612x612&w=0&k=20&c=GO2vjeF6J4RceOPq3Yi6JpBQbbTtdGGBElfHA55XQU8="
    },
    {
        "title": "Abbott Rectangular Dining Table",
        "description": "A robust dining table featuring a trestle base and a weathered pine finish, perfect for large gatherings.",
        "specifications": {
            "dimensions": "84\" W x 40\" D x 30\" H",
            "material": "Solid Pine Wood",
            "color": "Weathered Pine",
            "seating_capacity": 6,
            "weight": "150 lbs"
        },
        "category": "Dining Sets",
        "price": 1299.00,
        "image_url": "https://media.istockphoto.com/id/1283719701/photo/dining-area-table-with-six-chairs-table-settings.jpg?s=612x612&w=0&k=20&c=fVjiUMVZXiKkh12Rys9zVCPR7Fb4MgMHR5Dw44H1-x4="
    },
    {
        "title": "Agnès Round Dining Table",
        "description": "An elegant round dining table with a pedestal base and a smooth oak veneer top, ideal for intimate dining spaces.",
        "specifications": {
            "dimensions": "54\" Diameter x 30\" H",
            "material": "Oak Veneer and Solid Wood",
            "color": "Natural Oak",
            "seating_capacity": 4,
            "weight": "120 lbs"
        },
        "category": "Dining Sets",
        "price": 1599.00,
        "image_url": "https://media.istockphoto.com/id/1369202669/photo/farmhouse-interior-mockup-with-dining-table-and-chair-with-chandelier-and-dry-flowers-3d.jpg?s=612x612&w=0&k=20&c=ECThyl8GeoItu4JgeKNvCZmc5Rk7e4Cx3vUvBnhXGI0="
    },
    {
        "title": "Albion Buffet",
        "description": "A contemporary buffet featuring clean lines, ample storage, and a warm wood finish, perfect for modern dining areas.",
        "specifications": {
            "dimensions": "72\" W x 20\" D x 36\" H",
            "material": "Engineered Wood with Walnut Veneer",
            "color": "Warm Walnut",
            "storage": "4 Doors with Adjustable Shelves",
            "weight": "200 lbs"
        },
        "category": "Dining Sets",
        "price": 2199.00,
        "image_url": "https://media.istockphoto.com/id/513242314/photo/dinner.jpg?s=612x612&w=0&k=20&c=HQdbRyPLxZj8crGLOaSOTOh9TLo9D07jeu5Kc4vxKyI="
    },
    {
        "title": "Amish Classic Dining Chair",
        "description": "A handcrafted dining chair made from solid hardwood, showcasing traditional Amish craftsmanship and timeless design.",
        "specifications": {
            "dimensions": "18\" W x 17\" D x 42\" H",
            "material": "Solid Oak Wood",
            "color": "Natural Oak",
            "seat_height": "18\"",
            "weight": "20 lbs"
        },
        "category": "Dining Sets",
        "price": 249.00,
        "image_url": "https://media.istockphoto.com/id/89505193/photo/dining-room-chair.jpg?s=612x612&w=0&k=20&c=FESZWoie19ZJanDYWGlAZCthjU9z9JuWFyXhdNUAJ_o="
    },
    {
        "title": "Barnwood Trestle Dining Table",
        "description": "A rustic dining table crafted from reclaimed barnwood, featuring a sturdy trestle base and a rich, weathered finish.",
        "specifications": {
            "dimensions": "96\" W x 42\" D x 30\" H",
            "material": "Reclaimed Barnwood",
            "color": "Weathered Brown",
            "seating_capacity": 8,
            "weight": "180 lbs"
        },
        "category": "Dining Sets",
        "price": 1899.00,
        "image_url": "https://media.istockphoto.com/id/174749174/photo/close-up-dining-room.jpg?s=612x612&w=0&k=20&c=0wWsAbdq_z8k4FN7kExTMLF3YgNo_ZegcIKdU3gckZk="
    },
    {
        "title": "Bradford Dining Hutch",
        "description": "A classic dining hutch offering ample storage with glass-paneled doors, adjustable shelves, and a rich cherry finish.",
        "specifications": {
            "dimensions": "60\" W x 20\" D x 80\" H",
            "material": "Solid Cherry Wood",
            "color": "Rich Cherry",
            "storage": "2 Glass Doors, 3 Drawers, 2 Cabinets",
            "weight": "250 lbs"
        },
        "category": "Dining Sets",
        "price": 2999.00,
        "image_url": "https://img.freepik.com/premium-photo/traditional-wooden-hutch-buffet_1121362-34771.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Camden Upholstered Dining Chair",
        "description": "A modern dining chair featuring clean lines, comfortable upholstery, and tapered legs, suitable for contemporary settings.",
        "specifications": {
            "dimensions": "20\" W x 24\" D x 34\" H",
            "material": "Fabric Upholstery and Solid Wood Legs",
            "color": "Gray Fabric with Espresso Legs",
            "seat_height": "18\"",
            "weight": "18 lbs"
        },
        "category": "Dining Sets",
        "price": 199.00,
        "image_url": "https://img.freepik.com/premium-photo/elegant-upholstered-dining-chair_1310085-72149.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Dovetail Extendable Dining Table",
        "description": "An extendable dining table with a rustic finish and dovetail detailing, perfect for both casual and formal dining.",
        "specifications": {
            "dimensions": "72\"-96\" W x 40\" D x 30\" H",
            "material": "Solid Pine Wood",
            "color": "Rustic Pine",
            "seating_capacity": "6-8",
            "weight": "160 lbs"
        },
        "category": "Dining Sets",
        "price": 1799.00,
        "image_url": "https://media.istockphoto.com/id/1133609141/photo/dining-room-above-view.jpg?s=612x612&w=0&k=20&c=qxALPle8SRlP8dV1rOWFWhrGGvVdNj7CJ5UPUJcqoFE="
    },
    {
        "title": "Emerson Round Pedestal Table",
        "description": "A round pedestal table with a smooth top and a sturdy base, combining traditional design with modern functionality.",
        "specifications": {
            "dimensions": "60\" Diameter x 30\" H",
            "material": "MDF with Veneer and Solid Wood Base",
            "color": "Espresso",
            "seating_capacity": 4,
            "weight": "140 lbs"
        },
        "category": "Dining Sets",
        "price": 999.00,
        "image_url": "https://img.freepik.com/free-photo/front-view-brown-wooden-desk-dark-blue-wood-color-photo-kitchen-table_179666-43728.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Fulton Counter-Height Stool",
        "description": "A counter-height stool featuring a metal frame, wooden seat, and an industrial design, perfect for modern kitchens.",
        "specifications": {
            "dimensions": "18\" W x 18\" D x 24\" H",
            "material": "Metal Frame with Wooden Seat",
            "color": "Black Frame with Natural Wood Seat",
            "seat_height": "24\"",
            "weight": "15 lbs"
        },
        "category": "Dining Sets",
        "price": 149.00,
        "image_url": "https://img.freepik.com/free-vector/vector-two-ocher-brown-wooden-bar-stools-with-black-leather-seats-front-view-isolated-white-background_1284-47292.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Abinger Sofa",
        "description": "A contemporary sofa with sleek track arms and plush cushions, perfect for modern living spaces.",
        "specifications": {
            "dimensions": "90\" W x 38\" D x 37\" H",
            "material": "Polyester Upholstery",
            "color": "Smoke",
            "weight": "125 lbs"
        },
        "category": "Living Room",
        "price": 599.99,
        "image_url": "https://media.istockphoto.com/id/1194259365/photo/wall-lush-lava-with-sofa-living-room.jpg?s=612x612&w=0&k=20&c=uQr8lBrxNW3HYhUEVY509XuQukYmrUWeMGJ7whVp6Sc="
    },
    {
        "title": "Tulen Reclining Loveseat",
        "description": "A comfortable reclining loveseat with plush cushioning and a contemporary design.",
        "specifications": {
            "dimensions": "87\" W x 40\" D x 40\" H",
            "material": "Polyester Upholstery",
            "color": "Gray",
            "weight": "202 lbs"
        },
        "category": "Living Room",
        "price": 799.99,
        "image_url": "https://img.freepik.com/free-photo/full-shot-man-laying-couch-with-book_23-2149438579.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Lillian Channel Tufted Sofa",
        "description": "A midcentury modern sofa featuring channel tufting and velvet upholstery.",
        "specifications": {
            "dimensions": "84\" W x 34\" D x 32\" H",
            "material": "Velvet Upholstery",
            "color": "Emerald Green",
            "weight": "112 lbs"
        },
        "category": "Living Room",
        "price": 500.00,
        "image_url": "https://media.istockphoto.com/id/1223837484/photo/interior.jpg?s=612x612&w=0&k=20&c=jApA27m9mYM3qGgBA0uUYuHWV42vavcyhQWExOu2jis="
    },
    {
        "title": "Geo Reversible Sectional Sofa",
        "description": "A versatile sectional sofa with a reversible chaise and sleek design.",
        "specifications": {
            "dimensions": "110\" W x 79\" D x 34\" H",
            "material": "Fabric Upholstery",
            "color": "Charcoal",
            "weight": "150 lbs"
        },
        "category": "Living Room",
        "price": 1200.00,
        "image_url": "https://img.freepik.com/free-psd/grey-sofa-isolated_23-2151848257.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Wyatt Accent Chair",
        "description": "A stylish accent chair with a geometric frame and comfortable cushioning.",
        "specifications": {
            "dimensions": "28\" W x 30\" D x 35\" H",
            "material": "Linen Upholstery",
            "color": "Beige",
            "weight": "40 lbs"
        },
        "category": "Living Room",
        "price": 138.00,
        "image_url": "https://media.istockphoto.com/id/1919967887/photo/stylish-minimalist-entryway-with-a-classic-wooden-console-and-unique-pendant-lights-casting-a.jpg?s=612x612&w=0&k=20&c=u4UN-ZwXWKY078ObM3vBUwInscjGdw6F1BpcXKLeX9w="
    },
    {
        "title": "Lift-Top Coffee Table with Storage",
        "description": "A functional coffee table featuring a lift-top mechanism and hidden storage.",
        "specifications": {
            "dimensions": "47\" W x 24\" D x 18\" H",
            "material": "MDF and Metal",
            "color": "Espresso",
            "weight": "60 lbs"
        },
        "category": "Living Room",
        "price": 85.00,
        "image_url": "https://media.istockphoto.com/id/1281833884/photo/living-room-full-of-natural-sunlight.jpg?s=612x612&w=0&k=20&c=x0cWhyatwCibwyn-aSVbLSTnxl6V-7m7soKS6i9n23I="
    },
    {
        "title": "Modern TV Stand with Storage",
        "description": "A sleek TV stand featuring open shelving and cabinets for ample storage.",
        "specifications": {
            "dimensions": "60\" W x 16\" D x 24\" H",
            "material": "Wood and Metal",
            "color": "Black",
            "weight": "75 lbs"
        },
        "category": "Living Room",
        "price": 200.00,
        "image_url": "https://media.istockphoto.com/id/1401420416/photo/widescreen-tv-and-wood-sideboard-in-living-room-3d-rendering.jpg?s=612x612&w=0&k=20&c=e4Z4wcj0OVAeDILQGaBoKIbMVhYR9P9TJ3NEZ7ZFdAM="
    },
    {
        "title": "Mid-Century Bookshelf",
        "description": "A stylish bookshelf with a mid-century design, featuring multiple shelves for storage.",
        "specifications": {
            "dimensions": "36\" W x 14\" D x 72\" H",
            "material": "Walnut Wood",
            "color": "Walnut",
            "weight": "80 lbs"
        },
        "category": "Living Room",
        "price": 300.00,
        "image_url": "https://img.freepik.com/free-photo/bookshelf-with-plant-hat_23-2148882787.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
    {
        "title": "Ezra Sling Chair",
        "description": "A modern sling chair with a minimalist design and comfortable leather seat.",
        "specifications": {
            "dimensions": "26\" W x 30\" D x 32\" H",
            "material": "Leather and Metal",
            "color": "Tan",
            "weight": "35 lbs"
        },
        "category": "Living Room",
        "price": 218.00,
        "image_url": "https://media.istockphoto.com/id/2157067344/photo/folding-deck-chair-mockup-with-blank-fabric-on-a-sunny-terrace-in-realistic-3d-rendering.jpg?s=612x612&w=0&k=20&c=DYMyuUmD1vc07Kauo1TssG2lj_mBLm_i_3etA1uh61g="
    },
    {
        "title": "Montclair 4-Drawer Dresser",
        "description": "A contemporary dresser featuring four spacious drawers and a sleek design.",
        "specifications": {
            "dimensions": "34\" W x 18\" D x 48\" H",
            "material": "Engineered Wood",
            "color": "White",
            "weight": "100 lbs"
        },
        "category": "Living Room",
        "price": 237.00,
        "image_url": "https://img.freepik.com/premium-photo/antique-ferris-wheel-drawer_1048944-17907472.jpg?ga=GA1.1.771575013.1735887216&semt=ais_hybrid"
    },
];

module.exports = data;
