import {getProviders, signIn} from "next-auth/react";

function login({ providers }) {

  return (
  <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img src="https://links.papareact.com/9xl" alt="" className="w-52 mb-5"/>

      {Object.values(providers).map((provider) => {
        return(
        <div key={provider.name}>
          <button className="bg-[#18D860] text-white p-5 rounded-full" onClick={() => signIn(provider.id, { callbackUrl: "/"})}>Login with {provider.name}</button>

        </div>
        )})}
  </div>
  );
}

export default login;

export async function getServerSideProps(){
  let providers = await getProviders();
  
  return {
    props: {
        providers
    }
  }
}
