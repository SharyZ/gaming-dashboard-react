export const SectionHeading = ({ title, link }) => {
  return (
    <div className="mb-[25px] flex items-center justify-between">
      <h2>{title}</h2>
      {link && (
        <a
          href={link}
          className="text-[#a0a8b1] duration-300 hover:text-primary"
        >
          See All
        </a>
      )}
    </div>
  )
}
