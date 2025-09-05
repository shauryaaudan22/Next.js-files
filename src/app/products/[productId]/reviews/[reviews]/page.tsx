export default async function productReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const productId = params.productId;
  const reviewId = params.reviewId;

  return <h1>Review {reviewId} for product {productId}</h1>;
}
