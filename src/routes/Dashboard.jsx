import React from 'react'

export default function Dashboard() {
    
  return (
  
    <div className='wrapper container mx-auto py-14'>
        <div className="px-4">
            <h1 className='text-4xl lg:text-5xl main-title mb-3 text-red-400' style={{textAlign: 'left'}}>Olá, Victor</h1>
            <p className='mb-10'>Confira aqui algumas informações da sua conta</p>
        </div>
        <div class="flex flex-wrap container mx-auto">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-gray-500 uppercase font-bold text-xs">
                    Saldo na conta
                    </h5>
                    <span class="font-semibold text-xl text-gray-800">
                    R$ 4500.00
                    </span>
                </div>
                
                </div>
                <p class="text-sm text-gray-500 mt-4">
                <span class="text-green-500 mr-2">
                    <i class="fas fa-arrow-up"></i> 3.48%
                </span>
                <span class="whitespace-no-wrap">
                    Desde o mês passado
                </span>
                </p>
            </div>
            </div>
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-gray-500 uppercase font-bold text-xs">
                    ROI (Retorno sobre investimento)
                    </h5>
                    <span class="font-semibold text-xl text-gray-800">
                    R$ 163.41
                    </span>
                </div>
                
                </div>
                <p class="text-sm text-gray-500 mt-4">
                <span class="text-red-500 mr-2">
                    <i class="fas fa-arrow-down"></i> 3.48%
                </span>
                <span class="whitespace-no-wrap">
                    Desde o mês passado
                </span>
                </p>
            </div>
            </div>
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-gray-500 uppercase font-bold text-xs">
                    Limite total (crédito)
                    </h5>
                    <span class="font-semibold text-xl text-gray-800">
                    R$ 6000
                    </span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                    <i class="fas fa-users"></i>
                    </div>
                </div>
                </div>
                <p class="text-sm text-gray-500 mt-4">
                <span class="text-orange-500 mr-2">
                    <i class="fas fa-arrow-down"></i> 1.10%
                </span>
                <span class="whitespace-no-wrap">
                    Desde o ano passado
                </span>
                </p>
            </div>
            </div>
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-gray-500 uppercase font-bold text-xs">
                    Total gasto (do limite)
                    </h5>
                    <span class="font-semibold text-xl text-gray-800">
                    47.54%
                    </span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
                    <i class="fas fa-percent"></i>
                    </div>
                </div>
                </div>
                <p class="text-sm text-gray-500 mt-4">
                <span class="text-green-500 mr-2">
                    <i class="fas fa-arrow-up"></i> 12%
                </span>
                <span class="whitespace-no-wrap">
                    Desde o mês passado
                </span>
                </p>
            </div>
            </div>
        </div>
        </div>
  </div>
  )
}