import {useParams} from 'react-router-dom';

function HandleDynamicSegment() {
    const {id} = useParams();
    console.log("Received Data : ", id)
    return (
    <section className="h-screen relative gap-y-24 grid grid-cols-1 text-center gap-12 text-2xl pb-4 max-w-[90%] mx-auto md:grid-cols-2 items-center pt-40 lg:pt-50">
      Login Id : {id}
    </section>
  )
}

export default HandleDynamicSegment;