<?php

namespace App\Services;

use App\Repositories\ProductRepository;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use InvalidArgumentException;

class ProductService
{
    /**
     * @var $productRepository
     */
    protected $productRepository;

    /**
     * ProductService constructor.
     *
     * @param ProductRepository $productRepository
     */
    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * Get all product.
     *
     * @return String
     */
    public function getAll()
    {
        return $this->productRepository->getAll();
    }

    /**
     * Get product by id.
     *
     * @param $id
     * @return String
     */
    public function getById($id)
    {
        return $this->productRepository->getById($id);
    }

    /**
     * Save product data.
     * Store to DB if there are no errors.
     *
     * @param App\Http\Requests\ProductRequest $request
     * @return String
     */
    public function saveProductData($request)
    {
        $data = $request->only([
            'name',
            'category',
            'quantity',
            'status'
        ]);

        return $this->productRepository->save($data);        ;
    }

    /**
     * Update product data
     * Store to DB if there are no errors.
     *
     * @param App\Http\Requests\ProductRequest $request
     * @param $id
     * @return String
     */
    public function updateProduct($request, $id)
    {
        $data = $request->only([
            'name',
            'category',
            'quantity',
            'status'
        ]);

        DB::beginTransaction();

        try {
            $product = $this->productRepository->update($data, $id);
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());

            throw new InvalidArgumentException('Unable to update product data');
        }

        DB::commit();

        return $product;
    }

    /**
     * Delete product by id.
     *
     * @param $id
     * @return String
     */
    public function deleteById($id)
    {
        DB::beginTransaction();

        try {
            $product = $this->productRepository->delete($id);

        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());

            throw new InvalidArgumentException('Unable to delete product data');
        }

        DB::commit();

        return $product;
    }
}