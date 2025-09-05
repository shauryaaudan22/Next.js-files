import { notFound } from "next/navigation";


export default async function productReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const {productId,reviewId} = await params;
  if (parseInt(productId) > 1000){
    notFound();
  }
  return(
  <h1>Review {reviewId} for product {productId}</h1>
);
}
