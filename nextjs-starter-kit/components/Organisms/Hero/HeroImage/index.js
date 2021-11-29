export default function HeroImage(data) {
    console.log(data)
  return (

    <>
    {data.title}
    </>
  );
}

export const fragment = `
    fragment HeroImageFragment on SectionHeroImageRecord{
        __typename
        id
        title
        description
    }
`;
