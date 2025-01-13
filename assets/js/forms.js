function AddForm()
{
    // success
    iziToast.success({timeout: 5000, color : '#e9ecf0', icon: 'bi bi-check-lg', position: "bottomLeft", title: 'Success', message: 'Record Added Successfully'});
    iziToast.error({timeout: 5000, icon: 'bi bi-exclamation-triangle', position: "bottomLeft", title: 'Error', message: 'Please enter your course'});

    return false;
}