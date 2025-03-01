import { useQuery } from "@tanstack/react-query"
import { classService } from "../services/classes.service"

export function useClasses() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['classes'],
		queryFn: () => classService.getClasses()
	})

	return { data, isLoading, isSuccess }
}