export default function Home({ org }) {
    return (
        <div>
            <h1>{org.name}</h1>
            <h3>{org.location}</h3>
        </div>


    )
}

export const getStaticProps = async () => {

    let request = await fetch("https://api.github.com/orgs/styme");
    let response = await request.json();

    return {
        props: {
            org: response
        },
        revalidate: 10
    };

};