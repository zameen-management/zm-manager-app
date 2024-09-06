import { useEffect, useState } from "react";
import { Container } from "../../../../features/styles/Container.styled";
import { EmptyLease, Lease } from "../../../../features/models/Lease.model";
import { useParams } from "react-router-dom";
import LeaseApi from "../../../../features/api/Lease.api";
import { useSelector } from "react-redux";
import { getProperty } from "../../../../features/app/property.slice";
import { Column } from "../../../../features/styles/Column.styled";
import PropertyLeaseInfo from "../../../../features/components/properties/leases/PropertyLeaseInfo";

const PropertyLeasePage = () => {
	const { leaseId } = useParams();
	const property = useSelector(getProperty);
	const [lease, setLease] = useState<Lease>(EmptyLease);

	const fetchLease = async () => {
		if (!leaseId) return;
		try {
			const response = await LeaseApi.getById(leaseId);
			setLease(response);
		} catch (error: any) {
			alert(`Unable to fetch lease: ${error.message}`);
		}
	};

	useEffect(() => {
		fetchLease();
	}, []);

	if (!lease || !property) {
		return (
			<Container>
				<h5>Loading...</h5>
			</Container>
		);
	}

	return (
		<Container>
			<Column>
				<h5>{`${property.address.street} Lease: ${lease.startDate}-${lease.endDate}`}</h5>
				<PropertyLeaseInfo
					lease={lease}
					setLease={setLease}
					canEdit={false}
				/>
			</Column>
		</Container>
	);
};

export default PropertyLeasePage;
