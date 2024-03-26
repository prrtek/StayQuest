import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-clients";
import toast from "react-hot-toast";

const SignOutButton = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      toast.success("Signed Out");
    },
    onError: () => {
      toast.error("error signing out");
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleClick}
      className='text-blue-600 px-3 font-bold bg-white hover:bg-gray-100 '
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
