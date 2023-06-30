import SearchZoneLayout from "@/components/layouts/SearchZoneLayout";


export default function AppLayout(props) {

    return (
            <SearchZoneLayout>
                {props.children}
            </SearchZoneLayout>
    )
}
