const GetAvailability = ({ availabilityData }) => {
  return (
    <div className="">
      <div className="flex items-center p-2 rounded-xl gap-2  text-gray-500">
        {availabilityData && (
          <h3 className="text-lg uppercase font-medium">
            Utilgjengelig :{" "}
            <span>
              {new Date(availabilityData?.startDate).toLocaleString()}
            </span>
            {" - "}
            <span>{new Date(availabilityData?.endDate).toLocaleString()}</span>
          </h3>
        )}
      </div>
    </div>
  );
};

export default GetAvailability;
