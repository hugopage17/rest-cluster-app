import SavePanel from '../Popups/SavePanel.jsx'
import SuccessMessage from '../Components/SuccessMessage.jsx'
import ErrorMessage from '../Errors/ErrorMessage.jsx'

const SaveDialog = ({saveComplete, saveName, descName, nameSetter, descSetter, runSave, nextCallBack, close}) => {
    return(
        (() => {
            switch(saveComplete) {
              case 'IN_PROGRESS':
                return <SavePanel 
                            name={saveName}
                            desc={descName}
                            setName={nameSetter}
                            setDesc={descSetter}
                            save={runSave}
                            close={close}
                        />
              case 'SAVE_COMPLETE':
                return <SuccessMessage 
                            msg={'New Request Saved'} 
                            next={nextCallBack}
                        />
              case 'SAVE_ERROR':
                return <ErrorMessage 
                          msg={'Error'}
                          next={nextCallBack}
                        />
              default:
                return
            }
        })()
    )
}

export default SaveDialog