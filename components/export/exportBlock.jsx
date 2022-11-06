/**
 * Render export block UI
 */
import { DateRangePicker } from "rsuite"

export default function ExportBlock() {
    return (
        <div className="bg-white rounded py-3 px-4 flex gap-4 justify-between">
            < DateRangePicker placeholder="From - To" className="flex-auto" appearance="subtle" />
            <button className="border border-transparent text-gray-900 font-semibold duration-100 px-4 py-2 bg-secondary hover:bg-secondary-dark hover:text-secondary focus:outline-none focus:border-primary-dark focus:shadow-outline active:bg-primary-dark transition ease-in-out duration-150 rounded">Export</button>
        </div>
    )
}
