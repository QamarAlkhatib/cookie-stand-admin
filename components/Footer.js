export default function Footer(props) {
  return (
    <footer >
      <div className="fixed left-0 right-0 bg-[#00D29B]  h-12 pt-1">
        <h6 className="text-center text-[#232837]">{props.report.length} Locations World Wide</h6>
      </div>
    </footer>
  )
}
