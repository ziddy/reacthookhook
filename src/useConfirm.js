export const useConfirm = (message = "", onConfirm, onCancel) => {
    if(!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if(onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)){ //앞으로 안되면 window. 설정하자 (모달창 관련하에)
            onConfirm();
        } else {
            onCancel();
        }
    };
    return confirmAction;
  }