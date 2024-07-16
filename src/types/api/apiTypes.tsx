export interface ApiResponse<T> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
}