export default function Card({ thumb, title }) {

  return (
          <div>
<img src={thumb} alt={title} className="w-full h-75 object-cover" />
<h3 className="p-4">{title}</h3>
      </div>
  )
}