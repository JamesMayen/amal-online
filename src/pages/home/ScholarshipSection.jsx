import Button from "../../components/Buttons"


export default function ScholarshipSection() {
  return (
    <div className="px-[8%] py-[4rem]">
        <h2 className="text-5xl text-center font-bold mb-9">Scholarship</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-6">
            {Scholarships.map(scholar => (
                <div className={`bg-white shadow border-b-8 rounded-md overflow-hidden ${scholar.border}`}>
                    <img className="h-[260px]" src={scholar.image} alt="" />
                    <div className="p-5">
                        <h3 className="text-xl font-bold mb-2">{scholar.title}</h3>
                        <p>{scholar.text}</p>
                        <Button text='Apply now' cName="mt-5" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}


const Scholarships = [
    {
        title:'Moroco Scholarship',
        text:'we do some funny certificates processing from ministry of education',
        image:process.env.PUBLIC_URL+'/images/group-african-kids-learning-together.jpg',
        border:'border-primary'
    },
    {
        title:'Indi full funded Scholarship',
        text:'we do some funny certificates processing from ministry of education',
        image:process.env.PUBLIC_URL+'/images/education.jpg',
        border:'border-cl1'
    },
    {
        title:'Apply for University',
        text:'we do some funny certificates processing from ministry of education',
        image:process.env.PUBLIC_URL+'/images/training-2874597_1280.jpg',
        border:'border-cl2'
    },
    {
        title:'Moroco Scholarship',
        text:'we do some funny certificates processing from ministry of education',
        image:process.env.PUBLIC_URL+'/images/group-african-kids-learning-together.jpg',
        border:'border-primary'
    },
    {
        title:'Indi full funded Scholarship',
        text:'we do some funny certificates processing from ministry of education',
        image:process.env.PUBLIC_URL+'/images/education.jpg',
        border:'border-cl1'
    },
    {
        title:'Find Scholarships',
        text:'we do some funny certificates processing from ministry of education',
        image:process.env.PUBLIC_URL+'/images/bookkeeping-615384_1280.jpg',
        border:'border-greencl'
    },
]