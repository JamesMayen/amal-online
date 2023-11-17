

export default function FeatureSection() {
  return (
    <div className="px-[8%] py-[3rem]">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-6">
            {features.map(feature => (
                <div className="text-center" key={feature}>
                    <div className={`h-[120px] w-[120px] rounded-full overflow-hidden border-4 ${feature.border} p-5 mx-auto`}>
                        <img className="rounded-full" src={feature.image} alt="" />
                    </div>
                    <h2 className="text-xl font-bold">{feature.title}</h2>
                    <p className="">{feature.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}


const features = [
    {
        title:'Checking Exams Results',
        text:'we do some funny certificates processing from ministry of education',
        image:process.env.PUBLIC_URL+'/images/educa.png',
        border:'border-primary'
    },
    {
        title:'Certificate Processing',
        text:'we do some funny certificates processing from ministry of education',
        image:process.env.PUBLIC_URL+'/images/educa.png',
        border:'border-cl1'
    },
    {
        title:'Apply for University',
        text:'we do some funny certificates processing from ministry of education',
        image:process.env.PUBLIC_URL+'/images/educa.png',
        border:'border-cl2'
    },
    {
        title:'Find Scholarships',
        text:'we do some funny certificates processing from ministry of education',
        image:process.env.PUBLIC_URL+'/images/educa.png',
        border:'border-greencl'
    },
]