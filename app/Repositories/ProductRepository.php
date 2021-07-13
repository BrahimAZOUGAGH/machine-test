<?php

namespace App\Repositories;

use App\Models\Product;

class ProductRepository
{

    /**
     * Get all products.
     *
     * @return product $product
     */
    public function getAll()
    {
        return Product::get();
    }

    /**
     * Get product by id
     *
     * @param $id
     * @return mixed
     */
    public function getById($id)
    {
        return Product::find($id);
    }

    /**
     * Save Product
     *
     * @param $data
     * @return Product
     */
    public function save($data)
    {
        return Product::create($data);
    }

    /**
     * Update Product
     *
     * @param $data
     * @return Product
     */
    public function update($data, $id)
    {
        $product = $this->getById($id);
        $product->update($data);

        return $product;
    }

    /**
     * Update Product
     *
     * @param $data
     * @return Product
     */
    public function delete($id)
    {
        $product = $this->product->find($id);

        return $product->delete();
    }

}