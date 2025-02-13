import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  //   console.log(request);
  //   console.log(params);
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates }); // native JS bukan Next JS
  } catch (e) {
    return Response.json({ message: "Cabin not found" });
  }
}
