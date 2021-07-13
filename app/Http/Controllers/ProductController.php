<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Services\ProductService;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ProductController extends Controller
{
    /**
     * @var productService
     */
    protected $productService;

    /**
     * ProductController Constructor
     *
     * @param ProductService $productService
     *
     */
    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $result = $this->productService->getAll();
        } catch (Exception $e) {
            $result['error'] = $e->getMessage();
            return response()->json($result, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response(ProductResource::collection($result), Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\ProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        try {
            $result = $this->productService->saveProductData($request);
        } catch (Exception $e) {
            $result['error'] = $e->getMessage();
            return response()->json($result, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response(new ProductResource($result), Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $result = $this->productService->getById($id);
        } catch (Exception $e) {
            $result['error'] = $e->getMessage();
            return response()->json($result, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response(new ProductResource($result), Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\ProductRequest  $request
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, $id)
    {
        try {
            $result = $this->productService->updateProduct($request, $id);
        } catch (Exception $e) {
            $result['error'] = $e->getMessage();
            return response()->json($result, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response(new ProductResource($result), Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $this->productService->deleteById($id);
        } catch (Exception $e) {
            $result['error'] = $e->getMessage();
            return response()->json($result, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response(null, Response::HTTP_ACCEPTED);
    }
}
