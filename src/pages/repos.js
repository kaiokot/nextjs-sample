export default function Members({ org }) {
    return (
        <div>
            <h1>{org.name}</h1>
            <h3>{org.location}</h3>
        </div>
    )
}

export const getStaticProps = async () => {

    let request = await fetch("https://api.github.com/orgs/styme/repos");
    let response = await request.json();

    return {
        props: {
            org: response
        }
    };

};