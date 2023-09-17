import SearchZoneLayout from "@/components/layouts/SearchZoneLayout";


export default function AppLayout(props) {

    return (
        <SearchZoneLayout>
            {props.modal}
            {props.children}
        </SearchZoneLayout>
    )
}
