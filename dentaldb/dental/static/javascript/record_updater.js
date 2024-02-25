
var id_from_h3 = document.getElementById("element_id");
var idValue = id_from_h3.textContent || id_from_h3.innerText; 

var name_from_h3 = document.getElementById("name_label");
var nameValue = name_from_h3.textContent || name_from_h3.innerText; 

function getToothStatusForGivenIndex(index) {

	var idForGivenIndex = "tooth".concat('', index)

	var labelForGivenIndex = document.getElementById(idForGivenIndex);

	var toothValueForGivenIndex = labelForGivenIndex.textContent || labelForGivenIndex.innerText;

	return toothValueForGivenIndex;
}

let initialStatusForTooth0, initialStatusForTooth1, initialStatusForTooth2, initialStatusForTooth3, initialStatusForTooth4, initialStatusForTooth5, initialStatusForTooth6, initialStatusForTooth7, initialStatusForTooth8, initialStatusForTooth9, initialStatusForTooth10, initialStatusForTooth11, initialStatusForTooth12, initialStatusForTooth13, initialStatusForTooth14, initialStatusForTooth15, initialStatusForTooth16, initialStatusForTooth17, initialStatusForTooth18, initialStatusForTooth19, initialStatusForTooth20, initialStatusForTooth21, initialStatusForTooth22, initialStatusForTooth23, initialStatusForTooth24, initialStatusForTooth25, initialStatusForTooth26, initialStatusForTooth27, initialStatusForTooth28, initialStatusForTooth29, initialStatusForTooth30, initialStatusForTooth31, initialStatusForTooth32;

const initialStatus = [initialStatusForTooth0, initialStatusForTooth1, initialStatusForTooth2, initialStatusForTooth3, initialStatusForTooth4, initialStatusForTooth5, initialStatusForTooth6, initialStatusForTooth7, initialStatusForTooth8, initialStatusForTooth9, initialStatusForTooth10, initialStatusForTooth11, initialStatusForTooth12, initialStatusForTooth13, initialStatusForTooth14, initialStatusForTooth15, initialStatusForTooth16, initialStatusForTooth17, initialStatusForTooth18, initialStatusForTooth19, initialStatusForTooth20, initialStatusForTooth21, initialStatusForTooth22, initialStatusForTooth23, initialStatusForTooth24, initialStatusForTooth25, initialStatusForTooth26, initialStatusForTooth27, initialStatusForTooth28, initialStatusForTooth29, initialStatusForTooth30, initialStatusForTooth31, initialStatusForTooth32];

function updateAllInitialStatusesBasedOnToothStatus() {

	for (let i = 1; i < 33; i++) {
	  initialStatus[i] = getToothStatusForGivenIndex(i);
	}

}

updateAllInitialStatusesBasedOnToothStatus()

function returnImageSrcForGivenToothStatus(toothStatus) {

	if (toothStatus == "Healthy") {
	  return "/static/images/healthy.jpg";
	} else if (toothStatus == "Cavities") {
	  return "/static/images/cavities.jpg";
	} else if (toothStatus == "Chipped") {
	  return "/static/images/chipped.jpg";
	} else if (toothStatus == "Crooked") {
	  return "/static/images/crooked.jpg";
	} else if (toothStatus == "Gingivitis") {
	  return "/static/images/gingivitis.jpg";
	}
}

function updateToothImageForGivenIndexBasedOnToothStatus(index) {

	var ToothStatusForGivenIndex = getToothStatusForGivenIndex(index);

	var imageIdForGivenIndex = "image".concat('', index)

	document.getElementById(imageIdForGivenIndex).src = returnImageSrcForGivenToothStatus(ToothStatusForGivenIndex)

}

function updateAllToothImagesBasedOnToothStatus() {

	for (let i = 1; i < 33; i++) {
	  updateToothImageForGivenIndexBasedOnToothStatus(i);
	}

}

updateAllToothImagesBasedOnToothStatus()

function updateToothImageForGivenIndexBasedOnInitialToothStatus(index) {

	var ToothStatusForGivenIndex = initialStatus[index];

	var imageIdForGivenIndex = "image".concat('', index)

	document.getElementById(imageIdForGivenIndex).src = returnImageSrcForGivenToothStatus(ToothStatusForGivenIndex)

}

function updateAllToothImagesBasedOnInitialToothStatus() {

	for (let i = 1; i < 33; i++) {
	  updateToothImageForGivenIndexBasedOnInitialToothStatus(i);
	}

}

function returnToothStatusForGivenImageSrc(ImageSrc) {

	if (ImageSrc.includes("healthy")) {
	  return "Healthy";
	} else if (ImageSrc.includes("cavities")) {
	  return "Cavities";
	} else if (ImageSrc.includes("chipped")) {
	  return "Chipped";
	} else if (ImageSrc.includes("crooked")) {
	  return "Crooked";
	} else if (ImageSrc.includes("gingivitis")) {
	  return "Gingivitis";
	}
}

function updateInitialToothStatusForGivenIndexBasedOnToothImage(index) {

	var imageIdForGivenIndex = "image".concat('', index)

	var src_value = document.getElementById(imageIdForGivenIndex).src

	initialStatus[index] = returnToothStatusForGivenImageSrc(src_value)

}

function updateAllInitialToothStatusesBasedOnToothImages() {

	for (let i = 1; i < 33; i++) {
	  updateInitialToothStatusForGivenIndexBasedOnToothImage(i);
	}

}

const isHidden = elem => {
  const styles = window.getComputedStyle(elem)
  return styles.display === 'none' || styles.visibility === 'hidden'
}

function updateImageAfterClickOnImageForGivenIndex(index){  

	var imageString = "image".concat('', index)
	var srcForImage = document.getElementById(imageString).getAttribute('src');

	var edit_btn = document.getElementById("edit-btn");
	if (isHidden(edit_btn)) {


		if (srcForImage == "/static/images/healthy.jpg") {
		  document.getElementById(imageString).src="/static/images/cavities.jpg";
		} else if (srcForImage == "/static/images/cavities.jpg") {
		  document.getElementById(imageString).src="/static/images/chipped.jpg";
		} else if (srcForImage == "/static/images/chipped.jpg") {
		  document.getElementById(imageString).src="/static/images/crooked.jpg";
		} else if (srcForImage == "/static/images/crooked.jpg") {
		  document.getElementById(imageString).src="/static/images/gingivitis.jpg";
		} else if (srcForImage == "/static/images/gingivitis.jpg") {
		  document.getElementById(imageString).src="/static/images/healthy.jpg";
		}

	}

} 

function getToothStatusForGivenIndexBasedOnToothImage(index) {

	var imageIdForGivenIndex = "image".concat('', index)

	var src_value = document.getElementById(imageIdForGivenIndex).src

	var toothStatusDeterminedBasedOnToothImage = returnToothStatusForGivenImageSrc(src_value)

	return toothStatusDeterminedBasedOnToothImage

}

function modifyToolValuesForGivenId(name, tooth1, tooth2, tooth3, tooth4, tooth5, tooth6, tooth7, tooth8, tooth9, tooth10, tooth11, tooth12, tooth13, tooth14, tooth15, tooth16, tooth17, tooth18, tooth19, tooth20, tooth21, tooth22, tooth23, tooth24, tooth25, tooth26, tooth27, tooth28, tooth29, tooth30, tooth31, tooth32) {

    let url = `http://127.0.0.1:8000/api/dental/${idValue}/`;
    
    const ob = {

		name : name,
		tooth1 : tooth1,
		tooth2 : tooth2,
		tooth3 : tooth3,
		tooth4 : tooth4,
		tooth5 : tooth5,
		tooth6 : tooth6,
		tooth7 : tooth7,
		tooth8 : tooth8,
		tooth9 : tooth9,
		tooth10 : tooth10,
		tooth11 : tooth11,
		tooth12 : tooth12,
		tooth13 : tooth13,
		tooth14 : tooth14,
		tooth15 : tooth15,
		tooth16 : tooth16,
		tooth17 : tooth17,
		tooth18 : tooth18,
		tooth19 : tooth19,
		tooth20 : tooth20,
		tooth21 : tooth21,
		tooth22 : tooth22,
		tooth23 : tooth23,
		tooth24 : tooth24,
		tooth25 : tooth25,
		tooth26 : tooth26,
		tooth27 : tooth27,
		tooth28 : tooth28,
		tooth29 : tooth29,
		tooth30 : tooth30,
		tooth31 : tooth31,
		tooth32 : tooth32

    }
    
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    
    fetch(url, {
            method: "put",
            headers: headers,
            body: JSON.stringify(ob)
        })
        .then(res => res.json())
        .then(res => {
            console.log("Fetch complete1");
            console.log(res);
        })
}

function updateDatabaseDentalRecordBasedOnImageStatuses() {

	var tooth1Status = getToothStatusForGivenIndexBasedOnToothImage(1)
	var tooth2Status = getToothStatusForGivenIndexBasedOnToothImage(2)
	var tooth3Status = getToothStatusForGivenIndexBasedOnToothImage(3)
	var tooth4Status = getToothStatusForGivenIndexBasedOnToothImage(4)
	var tooth5Status = getToothStatusForGivenIndexBasedOnToothImage(5)
	var tooth6Status = getToothStatusForGivenIndexBasedOnToothImage(6)
	var tooth7Status = getToothStatusForGivenIndexBasedOnToothImage(7)
	var tooth8Status = getToothStatusForGivenIndexBasedOnToothImage(8)
	var tooth9Status = getToothStatusForGivenIndexBasedOnToothImage(9)
	var tooth10Status = getToothStatusForGivenIndexBasedOnToothImage(10)
	var tooth11Status = getToothStatusForGivenIndexBasedOnToothImage(11)
	var tooth12Status = getToothStatusForGivenIndexBasedOnToothImage(12)
	var tooth13Status = getToothStatusForGivenIndexBasedOnToothImage(13)
	var tooth14Status = getToothStatusForGivenIndexBasedOnToothImage(14)
	var tooth15Status = getToothStatusForGivenIndexBasedOnToothImage(15)
	var tooth16Status = getToothStatusForGivenIndexBasedOnToothImage(16)
	var tooth17Status = getToothStatusForGivenIndexBasedOnToothImage(17)
	var tooth18Status = getToothStatusForGivenIndexBasedOnToothImage(18)
	var tooth19Status = getToothStatusForGivenIndexBasedOnToothImage(19)
	var tooth20Status = getToothStatusForGivenIndexBasedOnToothImage(20)
	var tooth21Status = getToothStatusForGivenIndexBasedOnToothImage(21)
	var tooth22Status = getToothStatusForGivenIndexBasedOnToothImage(22)
	var tooth23Status = getToothStatusForGivenIndexBasedOnToothImage(23)
	var tooth24Status = getToothStatusForGivenIndexBasedOnToothImage(24)
	var tooth25Status = getToothStatusForGivenIndexBasedOnToothImage(25)
	var tooth26Status = getToothStatusForGivenIndexBasedOnToothImage(26)
	var tooth27Status = getToothStatusForGivenIndexBasedOnToothImage(27)
	var tooth28Status = getToothStatusForGivenIndexBasedOnToothImage(28)
	var tooth29Status = getToothStatusForGivenIndexBasedOnToothImage(29)
	var tooth30Status = getToothStatusForGivenIndexBasedOnToothImage(30)
	var tooth31Status = getToothStatusForGivenIndexBasedOnToothImage(31)
	var tooth32Status = getToothStatusForGivenIndexBasedOnToothImage(32)

	modifyToolValuesForGivenId(nameValue, tooth1Status, tooth2Status, tooth3Status, tooth4Status, tooth5Status, tooth6Status, tooth7Status, tooth8Status, tooth9Status, tooth10Status, tooth11Status, tooth12Status, tooth13Status, tooth14Status, tooth15Status, tooth16Status, tooth17Status, tooth18Status, tooth19Status, tooth20Status, tooth21Status, tooth22Status, tooth23Status, tooth24Status, tooth25Status, tooth26Status, tooth27Status, tooth28Status, tooth29Status, tooth30Status, tooth31Status, tooth32Status)

}

function clickEdit() {
    document.getElementById("edit-btn").hidden=true;
    document.getElementById("save-btn").hidden=false
    document.getElementById("cancel-btn").hidden=false
    document.getElementById("edit_description_label").hidden=false
}

var edit_button = document.getElementById("edit-btn");
edit_button.addEventListener("click", clickEdit);

function clickCancel() {
    document.getElementById("edit-btn").hidden=false;
    document.getElementById("save-btn").hidden=true
    document.getElementById("cancel-btn").hidden=true
    document.getElementById("edit_description_label").hidden=true
    updateAllToothImagesBasedOnInitialToothStatus()
}

var cancel_button = document.getElementById("cancel-btn");
cancel_button.addEventListener("click", clickCancel);

function clickSave() {
    document.getElementById("edit-btn").hidden=false;
    document.getElementById("save-btn").hidden=true
    document.getElementById("cancel-btn").hidden=true
    document.getElementById("edit_description_label").hidden=true
    updateAllInitialToothStatusesBasedOnToothImages()
    updateDatabaseDentalRecordBasedOnImageStatuses()
}

var save_button = document.getElementById("save-btn");
save_button.addEventListener("click", clickSave);


















































