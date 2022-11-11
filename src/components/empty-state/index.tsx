import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <ExclamationCircleIcon className="h-16 w-16 " />
      <p>No hay nada en tu carrito.</p>
      <p>Prueba comprando nuevos productos.</p>
    </div>
  );
};

export default EmptyState;
