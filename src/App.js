

import React, { useState } from "react";

const FileConverter = () => {
	const [file, setFile] = useState(null);
  	const [convertedFile, setConvertedFile] = useState(null);

    	const handleChange = e => {
      		setFile(e.target.files[0]);
          	};

            	const handleConversion = () => {
              		if (!file) {
                  			alert("File not found!");
                        			return;
                              		}

                                  		let fileReader = new FileReader();

                                      		fileReader.onloadend = () => {
                                          			let fileType = file.name.split(".")[1];

                                                			let convertedFileType;

                                                      			if (fileType === "pdf") {
                                                            				convertedFileType = "docx";
                                                                    			} else if (fileType === "docx") {
                                                                          				convertedFileType = "pdf";
                                                                                  			} else {
                                                                                        				alert("File type not supported!");
                                                                                                				return;
                                                                                                        			}

                                                                                                              			let convertedFileName =
                                                                                                                    				file.name.split(".")[0] + "." + convertedFileType;

                                                                                                                            			setConvertedFile(
                                                                                                                                  				new File([fileReader.result], convertedFileName, {
                                                                                                                                          					type: `application/${convertedFileType}`
                                                                                                                                                    				})
                                                                                                                                                            			);
                                                                                                                                                                  		};

                                                                                                                                                                      		fileReader.readAsArrayBuffer(file);
                                                                                                                                                                          	};

                                                                                                                                                                            	return (
                                                                                                                                                                              		<div>
                                                                                                                                                                                  			<input type="file" onChange={handleChange} />
                                                                                                                                                                                        			<button onClick={handleConversion}>Convert File</button>
                                                                                                                                                                                              			{convertedFile && (
                                                                                                                                                                                                    				<div>
                                                                                                                                                                                                            					<h3>Download Converted File: </h3>
                                                                                                                                                                                                                      					<a
                                                                                                                                                                                                                                						href={URL.createObjectURL(convertedFile)}
                                                                                                                                                                                                                                            						download={convertedFile.name}
                                                                                                                                                                                                                                                        					>
                                                                                                                                                                                                                                                                  						{convertedFile.name}
                                                                                                                                                                                                                                                                              					</a>
                                                                                                                                                                                                                                                                                        				</div>
                                                                                                                                                                                                                                                                                                			)}
                                                                                                                                                                                                                                                                                                      		</div>
                                                                                                                                                                                                                                                                                                          	);
                                                                                                                                                                                                                                                                                                            };

                                                                                                                                                                                                                                                                                                            export default FileConverter;