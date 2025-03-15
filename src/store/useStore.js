import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      // Receipt state
      receipts: [],
      currentReceipt: null,
      
      // Actions
      addReceipt: (receipt) => 
        set((state) => ({
          receipts: [...state.receipts, { ...receipt, id: Date.now() }],
        })),
      
      updateReceipt: (id, updatedReceipt) =>
        set((state) => ({
          receipts: state.receipts.map((receipt) =>
            receipt.id === id ? { ...receipt, ...updatedReceipt } : receipt
          ),
        })),
      
      deleteReceipt: (id) =>
        set((state) => ({
          receipts: state.receipts.filter((receipt) => receipt.id !== id),
        })),
      
      setCurrentReceipt: (receipt) =>
        set({ currentReceipt: receipt }),
      
      clearCurrentReceipt: () =>
        set({ currentReceipt: null }),
      
      // UI state
      isLoading: false,
      error: null,
      
      setLoading: (loading) =>
        set({ isLoading: loading }),
      
      setError: (error) =>
        set({ error }),
      
      clearError: () =>
        set({ error: null }),
    }),
    {
      name: 'receipt-storage',
      partialize: (state) => ({ receipts: state.receipts }),
    }
  )
);

export default useStore; 