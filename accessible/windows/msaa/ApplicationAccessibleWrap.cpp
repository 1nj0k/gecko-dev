/* -*- Mode: C++; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim:expandtab:shiftwidth=4:tabstop=4:
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "ApplicationAccessibleWrap.h"

#include "IUnknownImpl.h"

#include "nsIGfxInfo.h"
#include "nsPersistentProperties.h"
#include "nsServiceManagerUtils.h"
#include "mozilla/Components.h"

using namespace mozilla;
using namespace mozilla::a11y;

////////////////////////////////////////////////////////////////////////////////
// nsISupports
NS_IMPL_ISUPPORTS_INHERITED0(ApplicationAccessibleWrap, ApplicationAccessible)

IMPL_IUNKNOWN_INHERITED1(ApplicationAccessibleWrap, AccessibleWrap,
                         ia2AccessibleApplication)

already_AddRefed<nsIPersistentProperties>
ApplicationAccessibleWrap::NativeAttributes() {
  RefPtr<nsPersistentProperties> attributes = new nsPersistentProperties();

  nsCOMPtr<nsIGfxInfo> gfxInfo = components::GfxInfo::Service();
  if (gfxInfo) {
    bool isD2DEnabled = false;
    gfxInfo->GetD2DEnabled(&isD2DEnabled);
    nsAutoString unused;
    attributes->SetStringProperty(
        "D2D"_ns, isD2DEnabled ? u"true"_ns : u"false"_ns, unused);
  }

  return attributes.forget();
}
