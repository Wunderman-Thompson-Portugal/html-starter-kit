/**
 * Here we handle all the components based on __typename of DatoCms
 * It's used by Blocks Component to call specific component
 */

import dynamic from "next/dynamic";

export const sectionConfig = {
    HeroImageRecord: {
        repeatable: false,
        component: dynamic(() => import("@/components/Blocks/Hero/HeroImage")),
    },
}